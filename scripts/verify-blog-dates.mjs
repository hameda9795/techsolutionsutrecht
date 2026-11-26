import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import { spawnSync } from 'node:child_process';
import vm from 'node:vm';
import ts from 'typescript';
import matter from 'gray-matter';

// A date-only publication value must keep the same calendar day in every
// reader/renderer timezone. Different days cause React hydration error418.
const inputs=new Set(['2026-07-10','2026-09-06','2026-03-15']);
for(const file of await fs.readdir('content/blog')){
 if(!file.endsWith('.md'))continue;
 const {data}=matter(await fs.readFile(`content/blog/${file}`,'utf8'));
 if(data.date)inputs.add(String(data.date));
 if(data.dateModified)inputs.add(String(data.dateModified));
}
const dates=[...inputs].sort();
if(process.argv.includes('--worker')){
 const source=await fs.readFile('src/lib/blog-client.ts','utf8');
 const {outputText}=ts.transpileModule(source,{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}});
 const module={exports:{}};
 vm.runInNewContext(outputText,{module,exports:module.exports});
 process.stdout.write(JSON.stringify(dates.map(date=>({date,text:module.exports.formatDate(date)}))));
}else{
 const zones=['UTC','Europe/Amsterdam','America/Los_Angeles','America/New_York','Asia/Tokyo'];
 const observations=zones.map(zone=>{
  const r=spawnSync(process.execPath,[process.argv[1],'--worker'],{encoding:'utf8',env:{...process.env,TZ:zone}});
  assert.equal(r.status,0,r.stderr);return {zone,dates:JSON.parse(r.stdout)};
 });
 const baseline=observations[0].dates;
 assert.equal(baseline.find(d=>d.date==='2026-07-10').text,'10 juli 2026');
 assert.equal(baseline.find(d=>d.date==='2026-09-06').text,'6 september 2026');
 const mismatches=observations.flatMap(o=>o.dates.filter((d,i)=>d.text!==baseline[i].text).map(d=>({zone:o.zone,...d,expected:baseline.find(b=>b.date===d.date).text})));
 const before=process.argv.includes('--record-before');
 await fs.mkdir('research/gsc-browser-diagnosis-2026-10-15',{recursive:true});
 await fs.writeFile(`research/gsc-browser-diagnosis-2026-10-15/dates-${before?'before':'after'}.json`,JSON.stringify({checkedAt:new Date().toISOString(),zones,dates:dates.length,observations,mismatches},null,2));
 if(before)assert.ok(mismatches.length>0,'Baseline must reproduce the cross-timezone date mismatch');
 else assert.equal(mismatches.length,0,JSON.stringify(mismatches));
 console.log(JSON.stringify({phase:before?'reproduced-before-fix':'verified-after-fix',dates:dates.length,zones:zones.length,mismatches:mismatches.length,july10:observations.map(o=>({zone:o.zone,...o.dates.find(d=>d.date==='2026-07-10')}))},null,2));
}
