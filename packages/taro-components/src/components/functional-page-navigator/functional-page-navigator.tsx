// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Component, h, Host } from '@stencil/core'

@Component({
  tag: 'taro-functional-page-navigator-core'
})
export class FunctionalPageNavigator {
  componentDidLoad () {
    console.error('H5 暂不支持 FunctionalPageNavigator 组件！')
  }

  render () {
    return (
      <Host />
    )
  }
}
