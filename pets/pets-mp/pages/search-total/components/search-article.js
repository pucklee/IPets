// pages/search-total/components/search-article.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    articleList: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
  },

  /**
   * 组件的方法列表
   */
  methods: {
    goArticleMethod (e) {
      let { articleid, articletype } = e.currentTarget.dataset
      wx.navigateTo({
        url: `/pages/article/index?articleId=${articleid}&articleType=${articletype}`
      })
    }
  }
})
