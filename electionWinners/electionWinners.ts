export function electionsWinners(votes: number[], k: number): number {
    const currentMostVotes: number = votes.sort((a, b) => a - b)[votes.length - 1];
    const plausableCandidates: number[] = votes.filter((candidate) => candidate + k > currentMostVotes);
    return plausableCandidates.length;
  }
  
  console.log(electionsWinners([2, 3, 5, 2], 3));