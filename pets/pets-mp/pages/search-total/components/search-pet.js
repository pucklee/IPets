// pages/search-total/components/search-pet.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    petList: {
      type: Array,
      value: []
    },
    tag: {
      type: String,
      value: ''
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
    more () {
      wx.navigateTo({
        url: `/pages/search/search?tag=${this.properties.tag}`
      })
    },
    // 前往宠物详情
    goDetail (e) {
      const pid = e.currentTarget.dataset.pid
      wx.navigateTo({
        url: `/pages/pet-detail/index?pid=${pid}`
      })
    }
  }
})
