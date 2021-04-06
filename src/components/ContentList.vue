<template>
    <div class="contentList">
        <List item-layout="vertical">
            <ListItem :style="{margin:'0px 25px 5px'}" v-for="item in data" :key="item.id" loading>
                <ListItemMeta :avatar="item.avatar" :description="item.introduction">
                    <template slot="title">
                        <a :href="'/blogdetail/'+item.id" v-text="item.title" target="_blank"></a>
                    </template>
                </ListItemMeta>
                <template slot="action">
                    <li>
                        <Icon type="ios-star-outline" /> 123
                    </li>
                    <li>
                        <Icon type="ios-thumbs-up-outline" /> 234
                    </li>
                    <li>
                        <Icon type="ios-chatbubbles-outline" /> 345
                    </li>
                </template>
                <template slot="extra">
                </template>
            </ListItem>
        </List>
        <Page :style="{margin:'40px 25px 30px'}" :total="total" :page-size="row" :current="current" show-elevator show-total @on-change="on_change" />   
    </div>
</template>
<style scoped>
    .contentList{
        width:100%;
        background:#FFF8DC;
        display:block;  
    }
</style>
<script>
    import axios from 'axios'
    export default {
        name: "ContentList",
        props: {
            msg: String
        },
        data(){
            var result = {
                total:0,
                row:10,
                current:1,
                data:[]
            }
            return result
        },
        created:function (){
            // 初始请求
            this.get_data("blog",10,0)
        },
        methods:{
            on_change(row){
                console.log("row:",row)
                this.get_data("blog",10,(row-1)*10)
            },
            get_data(type,row,start) {
                console.log(33,row,start)
                axios.get(`http://yukimura.club:8080/v1/blog`,{
                    params:{row:row,start:start}
                }).then(function (response) {
                    return response.data
                }).then(data => {
                    console.log(data)
                    this.total = data["count"]
                    this.data = data["data"]
                    this.row = data["row"]
                    this.start = data["start"]
                })
            },
        }
    }
</script>