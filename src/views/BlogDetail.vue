<template>
    <Content :style="{background:'#FFFFF0'}">
        <Row :style="{'margin':'110px auto 0',width:'1557px'}" :gutter="58">
            <i-col span="18">
                <Row :style="{'min-height':'700px',background:'#FFF8DC',padding:'25px 15px 10px','font-family':'cursive'}">
                    <List v-if="~edit" class="view" :style="{'border-radius':'0px',width:'100%'}">
                        <ListItem class="title" :style="{width:'100%',display:'block','text-align':'center','padding':'5px 0'}">
                            <span :style="{'font-size':'28px'}">{{ title }}</span>
                            <Icon type="md-create" v-on:click="edit=~edit" size=28 :style="{float:'right','line-height':'inherit',cursor:'pointer'}"/>
                        </ListItem>
                        <ListItem class="overview" :style="{width:'100%'}">overview</ListItem>
                        <ListItem class="introduction" :style="{width:'100%'}">{{ introduction }}</ListItem>
                        <ListItem v-html='blogHtml'>1</ListItem> 
                    </List>
                    <List v-else class="edit" :style="{'border-radius':'0px',width:'100%'}">
                        <ListItem class="title-edit" :style="{width:'100%',display:'block','text-align':'left','padding':'5px 0'}">
                            <span :style="{'font-size':'25px'}">标题：</span>
                            <Input v-model="title" size="large" clearable style="width: 500px" />
                            <Icon type="md-checkmark-circle" v-on:click="edit=~edit" size=28 :style="{float:'right','line-height':'inherit',cursor:'pointer'}"/>
                            <Icon type="md-close-circle" v-on:click="edit=~edit" size=28 :style="{float:'right','line-height':'inherit',cursor:'pointer'}"/>
                        </ListItem>
                        <ListItem class="introduction-edit" :style="{width:'100%'}">
                            <span :style="{'font-size':'25px'}">简介：</span>
                            <Input v-model="introduction" type="textarea" :rows="4" size="large" clearable style="width: 900px" />
                        </ListItem>
                        <ListItem><span :style="{'font-size':'25px'}">正文：</span></ListItem>
                      
                            <mavonEditor class="mavonEditor" :style="{'min-height':'800px',width:'100%','z-index':zIndex}" fontSize=19px toolbarsBackground='#754F44' codeStyle='tomorrow'
                            v-model="handbook" @save="save" @readModel='readModel' @fullScreen='fullScreen'></mavonEditor>
                   
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

<script>
    import { mavonEditor } from "mavon-editor";
    import "mavon-editor/dist/css/index.css";
    import Right from "@/components/Right"
    import Comment from "@/components/Comment"
    export default {
        name: "BlogDetail",
        props: {
            msg: String
        },
        components: {
            mavonEditor,
            Right,
            Comment
        },
        data () {
            return {
                edit:false,
                title:"django share",
                introduction:"django share introduction",
                content:"#### how to use mavonEditor in nuxt.js",
                handbook: "#### how to use mavonEditor in nuxt.js",
                zIndex:0,
                blogHtml:'<div class="hljs-center"><h4><a id="how_to_use_mavonEditor_in_nuxtjs_2"></a>how to use mavonEditor in nuxt.js</h4></div>'
            };
        },
        methods:{
            save(value, render) {
                this.handbook = render;
            },
            readModel(value, render) {
                this.handbook = render;
            },
            fullScreen(status) {
                if(status==true){
                    this.zIndex = 1500;
                }else{
                    this.zIndex = 0;
                }
            },
        },
        mounted() {
        }
    }
</script>