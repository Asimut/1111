function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6QykQcRBYri":
        Script1();
        break;
      case "6BHrYGOLCVY":
        Script2();
        break;
      case "6A2awGlNObs":
        Script3();
        break;
      case "6MblGvsPgEQ":
        Script4();
        break;
      case "6rONe8zzqVh":
        Script5();
        break;
      case "6U0HV7PLzoQ":
        Script6();
        break;
      case "6862oZABmqW":
        Script7();
        break;
      case "6qRFCi8xr4a":
        Script8();
        break;
      case "6NJg3oYlesq":
        Script9();
        break;
      case "5fG62gfEWbt":
        Script10();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  player.once(() => {
const target = object('5ydpz4BIjrQ');
const duration = 750;
const easing = 'ease-out';
const id = '68GlhL0WSIO';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script2 = function()
{
  const target = object('5ydpz4BIjrQ');
const duration = 750;
const easing = 'ease-out';
const id = '68GlhL0WSIO';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  player.once(() => {
const target = object('6meNzAWhq4x');
const duration = 750;
const easing = 'ease-out';
const id = '5cOujT39HQ1';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script4 = function()
{
  const target = object('6meNzAWhq4x');
const duration = 750;
const easing = 'ease-out';
const id = '5cOujT39HQ1';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

};
