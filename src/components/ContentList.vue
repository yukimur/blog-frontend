<template>
    <div class="contentList">
        <List item-layout="vertical">
            <ListItem :style="{margin:'0px 25px 5px'}" v-for="item in data" :key="item.title">
                <ListItemMeta :avatar="item.avatar" :title="item.title" :description="item.description" />
                {{ item.content }}
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
        <Page :style="{margin:'40px 25px 30px'}" :total="100" show-elevator />   
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
    export default {
        name: "ContentList",
        props: {
            msg: String
        },
        data(){
            return{
                data: [
                    {
                        title: 'This is title 1',
                        description: 'This is description, this is description, this is description.',  
                    },
                    {
                        title: 'This is title 2',
                        description: 'This is description, this is description, this is description.', 
                    },
                    {
                        title: 'This is title 3',
                        description: 'This is description, this is description, this is description.',
                    }
                ]

            }
        }
    }
</script>