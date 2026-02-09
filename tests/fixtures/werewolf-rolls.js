export const werewolfBasicSuccess = {
  _formula: '3dw',
  basicDice: {
    total: 2,
    results: [
      { result: 8, discarded: false },
      { result: 7, discarded: false },
      { result: 5, discarded: false }
    ]
  },
  advancedDice: null
}

export const werewolfRageAssistedSuccess = {
  _formula: '2dw + 1dr',
  basicDice: {
    total: 1,
    results: [
      { result: 6, discarded: false },
      { result: 3, discarded: false }
    ]
  },
  advancedDice: {
    total: 1,
    results: [{ result: 7, discarded: false }]
  }
}

export const werewolfMixedRageSuccess = {
  _formula: '2dw + 1dr',
  basicDice: {
    total: 1,
    results: [
      { result: 6, discarded: false },
      { result: 3, discarded: false }
    ]
  },
  advancedDice: {
    total: 1,
    results: [{ result: 7, discarded: false }]
  }
}

export const werewolfBasicOnlySuccess = {
  _formula: '3dw',
  basicDice: {
    total: 2,
    results: [
      { result: 7, discarded: false },
      { result: 8, discarded: false },
      { result: 4, discarded: false }
    ]
  },
  advancedDice: null
}
