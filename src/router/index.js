import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Article from '@/page/article/index'
import NotFound from '@/components/NotFound' 
console.log("Article", Article)

Vue.use(Router)

export default new Router({
  routes: [
    {
		path: '/',
		name: 'HelloWorld',
		component: HelloWorld
    },
    {
    	path:'/article',
    	name:'article',
    	component: Article
    },
    {
    	path:'*',
    	name:'404',
    	component:NotFound
    }
  ],
  mode: 'history'
})
