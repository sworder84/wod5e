export const vampireBasicSuccess = {
  _formula: '3dv',
  basicDice: {
    total: 2,
    results: [
      { result: 6, discarded: false },
      { result: 9, discarded: false },
      { result: 3, discarded: false }
    ]
  },
  advancedDice: null
}

export const vampireBasicOnlySuccess = {
  _formula: '3dv + 0dg',
  basicDice: {
    total: 1,
    results: [
      { result: 7, discarded: false },
      { result: 2, discarded: false },
      { result: 4, discarded: false }
    ]
  },
  advancedDice: {
    total: 0,
    results: []
  }
}

export const vampireMixedHungerSuccess = {
  _formula: '2dv + 1dg',
  basicDice: {
    total: 1,
    results: [
      { result: 7, discarded: false },
      { result: 2, discarded: false }
    ]
  },
  advancedDice: {
    total: 1,
    results: [{ result: 6, discarded: false }]
  }
}
