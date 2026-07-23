(async()=>{
  const files=['game.part1.txt','game.part2.txt','game.part3.txt','game.part4.txt','game.part5.txt','game.part6.txt','game.part7.txt'];
  const parts=await Promise.all(files.map(async file=>{
    const response=await fetch(file,{cache:'no-store'});
    if(!response.ok) throw new Error(`Failed to load ${file}: ${response.status}`);
    return response.text();
  }));
  new Function(parts.join(''))();
})().catch(error=>{
  console.error(error);
  document.body.innerHTML='<main style="max-width:720px;margin:10vh auto;padding:24px;color:white;font-family:system-ui;background:#140822;border:1px solid #27e7ff;border-radius:18px"><h1>Court Dash failed to load</h1><p>'+String(error.message||error)+'</p><p>Refresh the page. If it keeps happening, the deployment is missing a game file.</p></main>';
});