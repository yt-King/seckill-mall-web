<template>
    <div class="goods" id="goods" name="goods">
        <div class="main">
            <div>
                <countdown :startTime="startTime" :endTime="endTime"></countdown>
            </div>
        </div>
        <!-- 主要内容区END -->
    </div>
</template>
<script>
import Countdown from '../components/Countdown.vue';

export default {
    components: {Countdown},
    data() {
        return {
            startTime: 1640908800, // 2023-01-01 00:00:00 的时间戳
            endTime: 1682173492, // 2023-01-01 01:00:00 的时间戳
            search: "" // 搜索条件
        }
    }
};
</script>

<style scoped>

</style>