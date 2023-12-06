<template>
  <div class="profile">
    <Search searchText="Search People" />
    <Dp
      class="main-profile-image"
      :imgUrl="imgUrl"
      :imgWidth="'110'"
      :imgHeight="'110'"
    />
    <p class="name">{{ name }}</p>
    <p class="role">{{ role }}</p>
    <div class="icons">
      <div class="chat-icon">
        <Icon :imgUrl="chatIcon" service="Chat" />
      </div>
      <div class="video-icon">
        <Icon :imgUrl="videoIcon" service="Video Call" />
      </div>
    </div>
    <div class="friends">
      <img src="../assets/icons/profile-icon.svg" alt="" width="16" />
      <p>View Friends</p>
    </div>
    <div class="favorite">
      <img src="../assets/icons/favorite-icon.svg" alt="" width="16" />
      <p>Add to Favorite</p>
    </div>
    <p class="attachments-text">Attachments</p>
    <div class="attachments">
      <Attachment text="PDF" />
      <Attachment text="Video" />
      <Attachment text="MP3" />
      <Attachment text="Image" />
    </div>
    <div class="button">View All</div>
  </div>
</template>

<script>
import Search from '../components/Search.vue'
import Dp from '../components/Dp.vue'
import Icon from '../components/Icon.vue'
import Attachment from '../components/Attachment.vue'
import { dummy } from '../constants/index.js'
import chatIcon from '../assets/icons/chat-icon.svg'
import videoIcon from '../assets/icons/video-icon.svg'

export default {
  data() {
    return {
      dummy,
      chatIcon,
      videoIcon
    }
  },
  props: ['name', 'role', 'imgUrl'],
  components: {
    Search,
    Dp,
    Icon,
    Attachment
  }
}
</script>

<style scoped>
.profile {
  max-height: 598px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--text);
}
.main-profile-image {
  margin: 20px 0;
}
.name {
  font-size: 28px;
  font-weight: 500;
}
.role {
  font-size: 20px;
  font-weight: 400;
}
.icons {
  width: 100%;
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
}
.chat-icon,
.video-icon {
  width: 50%;
  padding-top: 10px;
}
.chat-icon {
  border-right: 1px solid rgba(0, 0, 0, 0.2);
}
.friends,
.favorite {
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;
}
.friends,
.favorite p {
  font-size: 14px;
}
.attachments-text {
  width: 100%;
  margin: 10px 0 20px 0;
  font-weight: 600;
}
.attachments {
  display: flex;
  gap: 10px;
}
.button {
  font-size: 12px;
  margin-top: 20px;
  padding: 2px 8px;
  color: var(--primary);
  border: 1px solid var(--primary);
  border-radius: 50px;
}
</style>
