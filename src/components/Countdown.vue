<template>
  <div class="countdown" :style="bgStyle">
    <div v-if="showCountdown">
      <div class="countdown-text">{{ countdownText }}</div>
      <div class="countdown-timer">
        <div class="countdown-time">{{ countdownHours }}</div>
        <div class="countdown-label">时</div>
        <div class="countdown-time">{{ countdownMinutes }}</div>
        <div class="countdown-label">分</div>
        <div class="countdown-time">{{ countdownSeconds }}</div>
        <div class="countdown-label">秒</div>
      </div>
    </div>
    <div v-else class="countdown-text">{{ countdownText }}</div>
  </div>
</template>

<script>
export default {
  props: {
    startTime: {
      type: Number,
      required: true
    },
    endTime: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      countdownInterval: null,
      countdownHours: '00',
      countdownMinutes: '00',
      countdownSeconds: '00',
      showCountdown: true,
      countdownText: ''
    };
  },
  created() {
    this.startCountdown();
  },
  beforeDestroy() {
    clearInterval(this.countdownInterval);
  },
  methods: {
    startCountdown() {
      this.countdownInterval = setInterval(() => {
        const currentTime = Math.floor(Date.now() / 1000);
        if (currentTime < this.startTime) {
          this.showCountdown = true;
          this.countdownText = '距离秒杀开始还有：';
          const timeRemaining = this.startTime - currentTime;
          this.countdownHours = this.formatTime(Math.floor(timeRemaining / 3600));
          this.countdownMinutes = this.formatTime(Math.floor((timeRemaining % 3600) / 60));
          this.countdownSeconds = this.formatTime(timeRemaining % 60);
        } else if (currentTime >= this.startTime && currentTime < this.endTime) {
          this.showCountdown = true;
          this.countdownText = '距离秒杀结束还有：';
          const timeRemaining = this.endTime - currentTime;
          this.countdownHours = this.formatTime(Math.floor(timeRemaining / 3600));
          this.countdownMinutes = this.formatTime(Math.floor((timeRemaining % 3600) / 60));
          this.countdownSeconds = this.formatTime(timeRemaining % 60);
        } else {
          this.showCountdown = false;
          this.countdownText = '秒杀已结束';
          clearInterval(this.countdownInterval);
        }
      }, 1000);
    },
    formatTime(time) {
      return String(time).padStart(2, '0');
    }
  },
  computed: {
    bgStyle() {
      return {
        backgroundImage: "url(" + require("../assets/imgs/countDown.png") + ") ",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      };
    }
  }
};
</script>

<style scoped>
.countdown {
  text-align: center;
}

.countdown-text {
  font-weight: bold;
}

.countdown-timer {
  display: flex;
  justify-content: center;
}

.countdown-time {
    color: rgb(38, 50, 59);
  font-size: 48px;
  font-weight: bold;
  margin: 0 5px;
}

  .countdown-label {
    color: rgb(38, 50, 59);
    font-size:18px;
    margin: 0 3px;
    padding: 21px;
  }

  .countdown-text {
    color: rgb(38, 50, 59);
    font-size: 28px;
    margin-top: 0px;
    padding: 5px;
  }
  /* 设置背景图的样式 */
  .countdown::before {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
</style>