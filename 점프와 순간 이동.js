function solution(n)
{
   return n.toString(2).split('').filter(ch => ch === '1').length;
}
