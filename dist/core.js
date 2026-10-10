export function scan(text){
 if(typeof text!=='string'||text.trim().length<40)throw Error('Paste at least 40 characters of rules to scan.');
 if(text.length>150000)throw Error('Please keep the rules below 150,000 characters.');
 const lines=text.replace(/\r/g,'').split(/\n|(?<=[.;])\s+(?=[A-Z])/).map(x=>x.replace(/^\s*[-*•]\s*/, '').trim()).filter(Boolean);
 const seen=new Set();let context='';const items=[];
 for(const line of lines){if(line.length<65&&!/[.;]/.test(line))context=line;
 const combined=context+' '+line;
 let category=null;
 if(/deadline|submission period|registration period|judging period|\bcloses\b|\bdue\b|must.*\bby\b/i.test(line))category='Deadlines';
 else if(/eligib|age of majority|years (?:of age|old)|residen|not open to|conflict of interest/i.test(line))category='Eligibility';
 else if(/must|require[ds]?|should|shall|need to/i.test(line)&&/video|repository|github|gitlab|bitbucket|license|english|translation|submit|project|source code|skill pack|scope\.md|prd\.md|spec\.md|register|youtube|vimeo|testing|access|music|copyright|trademark/i.test(combined))category='Submission';
 if(!category||line.length<15||seen.has(line.toLowerCase()))continue;
 seen.add(line.toLowerCase());items.push({id:'item-'+items.length,category,text:line,source:line,reviewed:false,done:false});
 }
 return items;
}
export function checklistMarkdown(state){return '# '+state.name+' — DeadlineGuard checklist\n\nSource: '+(state.url||'Pasted rules')+'\n\nScanner suggestions; verify against the original rules.\n\n'+state.items.map(i=>'- ['+(i.done?'x':' ')+'] **'+i.category+'** '+i.text+'\n  - Review: '+(i.reviewed?'confirmed':'needs review')+'\n  - Evidence: '+i.source.replace(/\n/g,' ')).join('\n')+'\n';}
export function calendar(name,date,time,offset){
 if(!/^\d{4}-\d{2}-\d{2}$/.test(date)||!/^\d{2}:\d{2}$/.test(time)||!Number.isFinite(Number(offset)))throw Error('Choose a date, time, and UTC offset.');
 const parts=date.split('-').map(Number), hours=time.split(':').map(Number);
 const local=new Date(Date.UTC(parts[0],parts[1]-1,parts[2],hours[0],hours[1]));
 if(local.getUTCFullYear()!==parts[0]||local.getUTCMonth()!==parts[1]-1||local.getUTCDate()!==parts[2]||hours[0]>23||hours[1]>59)throw Error('Invalid date or time.');
 const instant=new Date(local.getTime()-Number(offset)*3600000);const stamp=d=>d.toISOString().replace(/[-:]/g,'').replace(/\.\d{3}/,'');
 const escape=s=>s.replace(/\\/g,'\\\\').replace(/\n/g,'\\n').replace(/,/g,'\\,').replace(/;/g,'\\;');
 return ['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//DeadlineGuard//Checklist//EN','BEGIN:VEVENT','UID:'+instant.getTime()+'@deadlineguard','DTSTAMP:'+stamp(new Date()),'DTSTART:'+stamp(instant),'SUMMARY:'+escape(name+' submission deadline'),'DESCRIPTION:Manually confirmed deadline. Verify the official rules.','BEGIN:VALARM','TRIGGER:-P1D','ACTION:DISPLAY','DESCRIPTION:Deadline tomorrow','END:VALARM','END:VEVENT','END:VCALENDAR',''].join('\r\n');
}
