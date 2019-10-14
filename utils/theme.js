const themeList = {
  darkBlue : {
    name : 'darkBlue',
    color: '#6491CB',
    completedColor: '#234678',
    frontColor: '#ffffff'
  },
  royal : {
    name: 'royal',
    color: '#886aea',
    completedColor: '#643de4',
    frontColor: '#ffffff'
  },
  balanced: {
    name: 'balanced',
    color: '#33cd5f',
    completedColor: '#28a54c',
    frontColor: '#ffffff'
  },
  light: {
    name: 'light',
    color: '#ddd',
    completedColor: '#fff',
    frontColor: '#ffffff'
  },
  calm: {
    name: 'calm',
    color: '#11c1f3',
    completedColor: '#0a9dc7',
    frontColor: '#ffffff'
  },
  positive: {
    name: 'positive',
    color: '#387ef5',
    completedColor: '#0c60ee',
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