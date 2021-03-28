<template>
    <div class="search">
        <Row class="search_row">
            <span class="search_span">关键词</span>
            <Input v-model="keyword" placeholder="Enter something..." clearable style="width: 200px" />
        </Row>
        <Row class="search_row">
            <span>日期</span>
            <DatePicker type="daterange" placement="bottom-end" placeholder="Select date" style="width: 200px"></DatePicker>
        </Row>
        <Row class="search_row">
            <span>标签</span>
            <Select  filterable multiple style="width: 200px">
                <Option v-for="item in tagList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
            <Button icon="ios-search" :style="{'margin-left':'20px'}">搜索</Button>
        </Row>
    </div>
</template>
<style scoped>
    .search{
        width:100%;
        background:#FFF8DC;
        display:block;
    }
    .search_row{
        margin:15px 0 15px;
    }
    .search_row span{
        font-family: cursive;
        font-size: 16px;
        margin:0 15px 0 25px;
        line-height:2;
    }
</style>
<script>
    export default {
        name: "Search",
        props: {
            msg: String
        },
        data(){
            return{
                tagList: [
                    {
                        value: 'New York',
                        label: 'New York'
                    },
                    {
                        value: 'London',
                        label: 'London'
                    },],
                keyword: 'Hello World'
            }
        }
    }
</script>