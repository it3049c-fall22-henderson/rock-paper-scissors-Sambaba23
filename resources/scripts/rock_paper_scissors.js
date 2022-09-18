class RockPaperScissors {
  constructor(username) {
    this.username = username;
    this.score = {
      user: 0,
      cpu:0 
    },
    this.gameHistoryLog = [];
  }

  /**
   * RETURN: one of the following values (`rock`, `paper`, `scissors`)
   * using Math.random() method, you should be able to get one of the following values
   */
  generateCPUResponse(){
    const acceptedValues = [ `rock`, `paper`, `scissors` ];
   let CPUpick = Math.floor(Math.random()*3)
    return acceptedValues[CPUpick];
  }
  /**
   * returns one of the following values: `win`, `lose`, `tie`
   * tie:
   *     the user selection the same as the CPU
   * win: 
   *    (user is `rock` and cpu is `scissors
   *     OR
   *    (user is `paper` and cpu is `rock`) 
   *     OR 
   *    (user is `scissors` and cpu is `paper`)
   * `lose`:
   *    the opposite case :)
   * @param {string} userSelection user selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   * @param {string} cpuSelection computer selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   */
  determineWinner(userSelection, cpuSelection){
    const acceptedResults = [ `win`, `lose`, `tie` ];
    let winner;
    
    if (userSelection === cpuSelection) {
      winner = acceptedResults[2];
    } else if (userSelection == 'rock' && cpuSelection == 'scissors') {
      winner = acceptedResults[0];
    } else if (userSelection == 'paper' && cpuSelection == 'rock') {
      winner = acceptedResults[0];
    } else if (userSelection == 'scissors' && cpuSelection == 'paper') {
      winner = acceptedResults[0];
    } else {
      winner = acceptedResults[1];
    }
    return winner;
  }

  /**
   * 
   * @param {string} userSelection user selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   */
  play(userSelection){
    if (winner == 'win') {
      this.score.user++;
      winner = this.username;
      this.gameHistoryLog.push(this.username + ' selected ' + userSelection + ', Computer selected ' + cpuSelection + ': ' + winner + ' wins!');
    }

    if (winner == 'lose') {
      this.score.cpu++;
      winner = 'CPU';
      this.gameHistoryLog.push(this.username + ' selected ' + userSelection + ', Computer selected ' + cpuSelection + ': CPU wins!');
    }

    if (winner == 'tie') {
      this.gameHistoryLog.push(this.username + ' selected ' + userSelection + ', Computer selected ' + cpuSelection + ': it is a tie!');
    }
  }

}