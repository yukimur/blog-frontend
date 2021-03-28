<template>
    <Content :style="{background:'#FFFFF0'}">
        <Row :style="{'margin':'110px auto 0',width:'1557px'}" :gutter="58">
            <i-col span="18">
                <Button v-on:click="edit=~edit">
                    <span v-show="~edit">编辑</span>
                    <span v-show="edit">退出编辑</span>
                </Button>
                <Row :style="{height:'900px'}">
                    <div v-if="~edit">
                        <div v-html='blogHtml'></div>  
                    </div>
                    <div v-else>
                        <mavonEditor class="mavonEditor" :style="{width:'100%','z-index':zIndex}" fontSize=19px toolbarsBackground='#754F44' codeStyle='tomorrow'
                            v-model="handbook" @save="save" @readModel='readModel' @fullScreen='fullScreen'></mavonEditor>
                    </div>
                </Row>
                <Row v-model="handbook">
                    <div v-html='handbook'></div>          
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