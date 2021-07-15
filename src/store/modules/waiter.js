import { get, post } from '../../utils/axios'
export default {
    namespaced: true,
    state: {
        title: '用户管理',
        list: null,
        total: 0, //总数量
        listQuery: {
            page: 1, //当前页码
            limit: 5 //一页显示几条
        }
    },
    actions: {
        //异步方法
        fetchData(context) {
            get('/waiter/query', {
                page: context.state.listQuery.page - 1,//后台从第0页开始
                pageSize: context.state.listQuery.limit
            }).then((msg) => {
                //获取数据的总数
                context.state.total = msg.data.total
                //获取当前页码下的数据
                context.state.list = msg.data.list
            })
        }
    }
}