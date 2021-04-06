<template>
    <Content :style="{background:'#FFFFF0'}">
        <Row :style="{'margin':'110px auto 0',width:'1557px'}" :gutter="58">
            <i-col span="18" :style="{'padding-right':'0px'}">
                <Row :style="{'min-height':'700px',background:'#FFF8DC',padding:'25px 15px 10px','font-family':'cursive'}">
                    <List v-if="~edit" class="view" :style="{'border-radius':'0px',width:'100%'}">
                        <ListItem class="title" :style="{width:'100%',display:'block','text-align':'center','padding':'5px 0'}">
                            <span :style="{'font-size':'28px'}">{{ title }}</span>
                            <Icon type="md-create" v-on:click="edit=-1" size=28 :style="{float:'right','line-height':'inherit',cursor:'pointer'}"/>
                        </ListItem>
                        <ListItem class="overview" :style="{width:'100%'}">overview</ListItem>
                        <ListItem class="introduction" :style="{width:'100%'}">{{ introduction }}</ListItem>
                        <ListItem ><div v-html='contentHtml1' class="rich"></div></ListItem> 
                    </List>
                    <List v-else class="edit" :style="{'border-radius':'0px',width:'100%'}">
                        <ListItem class="title-edit" :style="{width:'100%',display:'block','text-align':'left','padding':'5px 0'}">
                            <span :style="{'font-size':'25px'}">标题：</span>
                            <Input v-model="title" size="large" clearable style="width: 500px" />
                            <Icon type="md-checkmark-circle" v-on:click="putPaper" size=28 :style="{float:'right','line-height':'inherit',cursor:'pointer'}"/>
                            <Icon type="md-close-circle" v-on:click="edit=~edit" size=28 :style="{float:'right','line-height':'inherit',cursor:'pointer'}"/>
                        </ListItem>
                        <ListItem class="introduction-edit" :style="{width:'100%'}">
                            <span :style="{'font-size':'25px'}">简介：</span>
                            <Input v-model="introduction" type="textarea" :rows="4" size="large" clearable style="width: 900px" />
                        </ListItem>
                        <ListItem><span :style="{'font-size':'25px'}">正文：</span></ListItem>
                      
                            <mavonEditor class="mavonEditor" :style="{'min-height':'800px',width:'100%','z-index':zIndex}" fontSize=19px toolbarsBackground='#754F44' codeStyle='tomorrow'
                            v-model="content" @save="save" @fullScreen='fullScreen'></mavonEditor>
                   
                    </List>
                </Row>
                <Row>
                    <Comment></Comment>
                </Row>
            </i-col>
            <i-col span="6">
                <Right></Right>
            </i-col>
        </Row>
    </Content>
</template>
<style scope>
    .rich>>> img{ display:block; max-width: 100%}
</style>
<script>
    // import axios from 'axios'
    // axios.defaults.withCredentials = true;
    // export const start = () => {
    //     return axios.request({
    //         method: "get",
    //         url: "http://82.156.121.144:5000/indexinfo/SH000300?start_date=2016-01-22"
    //     })
    // }

    import { mavonEditor } from "mavon-editor";
    import "mavon-editor/dist/css/index.css";
    import Right from "@/components/Right"
    import Comment from "@/components/Comment"

    import axios from 'axios'
    
    export default {
        name: "BlogDetail",
        props: {
            msg: String,
        },
        components: {
            mavonEditor,
            Right,
            Comment
        },
        data () {
            var result = {
                edit:false,
                title:"",
                introduction:"",
                content:"",
                zIndex:0,
                contentHtml1:""
            }
            axios.get(`http://yukimura.club:8080/v1/blog/`+this.$route.params.id).then(response => {
                result["title"] = response.data["title"]
                result["introduction"] = response.data["introduction"]
                result["content"] = response.data["content"]
                result["contentHtml1"] = response.data["contentHtml1"]
            })

            return result;
        },
        methods:{
            save(value, render) {
                this.contentHtml1 = render
                this.content = value;
            },
            fullScreen(status) {
                if(status==true){
                    this.zIndex = 1500;
                }else{
                    this.zIndex = 0;
                }
            },
            putPaper(){
                console.log(12,this.contentHtml1);
                axios.put('http://yukimura.club:8080/v1/blog/'+this.$route.params.id, {
                    title: this.title,
                    introduction: this.introduction,
                    content: this.content,
                    contentHtml1: this.contentHtml1,
                })
                .then(function (response) {
                    console.log(response,this.edit);
                    this.edit = 1;
                }.bind(this))
            }
        },
        mounted() {
        }
    }
</script>