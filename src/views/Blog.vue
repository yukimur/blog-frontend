<template>
    <Content :style="{background: '#FFFFF0', minHeight: '700px'}">
        <Row :style="{'margin':'110px 60px 0','margin-top':'110px'}" :gutter="58">
            <i-col span="17">
                <Row>
                    <Search></Search>
                </Row>
                <Row>
                    <ContentList></ContentList>
                </Row>
            </i-col>
            <i-col span="7">
                <Right></Right>
            </i-col>
        </Row>
    </Content>
</template>

<script>
    import Right from "@/components/Right"
    import Search from "@/components/Search"
    import ContentList from "@/components/ContentList"
    export default {
        name: "Blog",
        props: {
            msg: String
        },
        components: {
            Right,
            Search,
            ContentList,
        },
        data () {
            return {
                split1: 0.5
            }
        },
        methods:{
        },
        mounted() {
        }
    }
</script>