<template>
    <List item-layout="vertical" :style="{margin: '32px 0',width:'100%',background:'#FFF8DC'}" border size="large" split>
        <ListItem v-for="paper in papers" :key="paper.title">
            <ListItemMeta :avatar="paper.avatar" :title="paper.title" :description="paper.description" />
            {{ paper.content }}
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
                <img src="https://dev-file.iviewui.com/5wxHCQMUyrauMCGSVEYVxHR5JmvS7DpH/large" style="width: 280px">
            </template>
        </ListItem>
    </List>
</template>
<style scoped>

</style>
<script>
    export default {
        name: "HomeContentList",
        props: {
            msg: String
        },
        data () {
            return {
                papers: [
                    {
                        title: 'This is title 1',
                        description: 'This is description, this is description, this is description.',
                        content: 'This is the content, this is the content, this is the content, this is the content.'
                    },
                    {
                        title: 'This is title 2',
                        description: 'This is description, this is description, this is description.',
                        content: 'This is the content, this is the content, this is the content, this is the content.'
                    },
                    {
                        title: 'This is title 3',
                        description: 'This is description, this is description, this is description.',
                        content: 'This is the content, this is the content, this is the content, this is the content.'
                    }
                ]
            }
        },
        mounted() {
            this.scroll(this.papers)
        },
        methods: {
            beforeMount() {
            },
            scroll(papers) {
                let isLoading = false
                window.onscroll = () => {
                    // 距离底部200px时加载一次
                    let bottomOfWindow = document.documentElement.offsetHeight - document.documentElement.scrollTop - window.innerHeight <= 30
                    if (bottomOfWindow && isLoading == false) {
                        // isLoading = true
                        papers.push(1)
                        // axios.get(`https://randomuser.me/api/`).then(response => {
                        //     paper.push(response.data.results[0])
                        //     isLoading = false
                        // })
                    }
                }
            }
        }

    }
</script>