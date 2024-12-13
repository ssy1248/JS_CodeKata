function solution(k, dungeons) {
    const N = dungeons.length
    const visited = new Array(N).fill(0)
    let answer = 0

    function dfs(k, cnt){
        answer = Math.max(cnt, answer)

        for (let j = 0; j < N; j++){
            if (k >= dungeons[j][0] && !visited[j]){
                visited[j] = 1
                dfs(k - dungeons[j][1], cnt + 1)
                visited[j] = 0
            }
        }
    }

    dfs(k, 0)
    return answer;
}