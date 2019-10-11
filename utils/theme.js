const themeList = {
  darkBlue : {
    name : 'darkBlue',
    color: '#6491CB',
    frontColor: '#ffffff'
  },
  royal : {
    name: 'royal',
    color: '#886aea',
    frontColor: '#ffffff'
  },
  balanced: {
    name: 'balanced',
    color: '#33cd5f',
    frontColor: '#ffffff'
  },
  light: {
    name: 'light',
    color: '#ddd',
    frontColor: '#ffffff'
  },
  calm: {
    name: 'calm',
    color: '#11c1f3',
    frontColor: '#ffffff'
  },
  positive: {
    name: 'positive',
    color: '#387ef5',
    frontColor: '#ffffff'
  }
}

// 选择主题
const theme = function (themeName) {
  return themeList[themeName];
}

module.exports = {
  theme: theme,
  themeList: themeList
}