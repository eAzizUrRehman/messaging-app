import accountDp from '../assets/account-dp.png'
import user1 from '../assets/user-1.jpg'
import user2 from '../assets/user-2.jpg'
import user3 from '../assets/user-3.jpg'
import user4 from '../assets/user-4.jpg'
import user5 from '../assets/user-5.jpg'
import user6 from '../assets/user-6.jpg'

const account = {
  name: 'Gravid Cristofer',
  role: 'Senior Developer',
  imgUrl: accountDp,
  imgWidth: '60',
  imgHeight: '60'
}

const dummy = user1

const users = [
  {
    id: 'user1',
    name: 'Alice Johnson',
    role: 'Software Engineer',
    lastMsgTime: 'online',
    unreadMsgs: 2,
    imgUrl: user1,
    chatHistory: [
      { message: "We've completed phase 2, moving to phase 3.", fromMe: false },
      { message: 'Great news! We won the new project contract.', fromMe: true },
      { message: "Let's celebrate the success!", fromMe: false }
    ]
  },
  {
    id: 'user2',
    name: 'John Smith',
    role: 'Product Manager',
    lastMsgTime: '11:15AM',
    unreadMsgs: 1,
    imgUrl: user2,
    chatHistory: [
      { message: 'Hello!', fromMe: true },
      { message: 'Hi there!', fromMe: false },
      { message: "How's your day going?", fromMe: true },
      { message: "It's been pretty good. Thanks for asking!", fromMe: false },
      { message: 'What are your plans for the weekend?', fromMe: true },
      {
        message: "I'm thinking about going for a hike. How about you?",
        fromMe: false
      },
      {
        message:
          'That sounds like a great idea! I might catch up on some reading.',
        fromMe: true
      },
      {
        message: 'Reading is always a good choice. Any book recommendations?',
        fromMe: false
      },
      {
        message:
          "I recently read 'The Silent Patient.' It's a gripping thriller!",
        fromMe: true
      },
      {
        message: "I'll add it to my reading list. Thanks for the suggestion!",
        fromMe: false
      },
      { message: "You're welcome! Enjoy your weekend!", fromMe: true },
      { message: 'You too! Have a great one!', fromMe: false },
      { message: 'Hello!', fromMe: true },
      { message: 'Hi there!', fromMe: false },
      { message: 'How can I help you?', fromMe: true },
      { message: 'I just wanted to say hi and chat for a bit.', fromMe: false },
      { message: "What's your favorite type of music?", fromMe: true },
      {
        message: 'I love listening to rock music. How about you?',
        fromMe: false
      },
      {
        message:
          "I enjoy a variety of genres, but I'm a fan of jazz and blues.",
        fromMe: true
      },
      { message: 'Nice! Do you play any musical instruments?', fromMe: false },
      { message: 'Yes, I play the guitar. How about you?', fromMe: true },
      {
        message: 'I dabble in piano and drums. Music is a great way to relax.',
        fromMe: false
      },
      {
        message: "I couldn't agree more. It's a universal language.",
        fromMe: true
      },
      { message: 'Hello!', fromMe: true },
      { message: 'Hi there!', fromMe: false },
      { message: 'How can I help you?', fromMe: true },
      {
        message: "I'm just checking in to see how you're doing.",
        fromMe: false
      },
      {
        message: "I appreciate your concern. I'm doing well, thank you!",
        fromMe: true
      },
      {
        message:
          "That's great to hear! If you have any questions or need assistance, feel free to ask.",
        fromMe: false
      },
      { message: 'Will do. Thanks for being so helpful!', fromMe: true },
      { message: "You're welcome! Have a fantastic day!", fromMe: false }
    ]
  },
  {
    id: 'user3',
    name: 'Emma Davis',
    role: 'UI/UX Designer',
    lastMsgTime: 'online',
    unreadMsgs: 3,
    imgUrl: user3,
    chatHistory: [
      { message: 'Please review the proposal I sent you.', fromMe: false },
      {
        message: 'We received positive feedback from the client.',
        fromMe: true
      },
      { message: "I'll schedule a team-building event soon.", fromMe: false },
      { message: "What's the status of the project?", fromMe: true }
    ]
  },
  {
    id: 'user4',
    name: 'William Brown',
    role: 'Frontend Developer',
    lastMsgTime: '10:10AM',
    unreadMsgs: 0,
    imgUrl: user4,
    chatHistory: [
      { message: 'I have a question about the project.', fromMe: false },
      { message: 'Sure, go ahead.', fromMe: true },
      { message: 'I was wondering about the deadline.', fromMe: false },
      { message: 'Hey, are you available for a quick chat?', fromMe: true }
    ]
  },
  {
    id: 'user5',
    name: 'Olivia Taylor',
    role: 'Marketing Specialist',
    lastMsgTime: '1:20AM',
    unreadMsgs: 0,
    imgUrl: user5,
    chatHistory: [
      { message: "I've reviewed the latest design drafts.", fromMe: false }
    ]
  },
  {
    id: 'user6',
    name: 'James Wilson',
    role: 'QA Engineer',
    lastMsgTime: 'online',
    unreadMsgs: 2,
    imgUrl: user6,
    chatHistory: [
      { message: 'The new design looks great!', fromMe: true },
      { message: 'Could you help with the CSS issue?', fromMe: false }
    ]
  },
  {
    id: 'user7',
    name: 'Sophia White',
    role: 'Data Analyst',
    lastMsgTime: '4:50PM',
    unreadMsgs: 0,
    imgUrl: user1,
    chatHistory: [
      { message: 'The campaign results are in.', fromMe: true },
      { message: 'Found a few bugs in the latest build.', fromMe: false }
    ]
  },
  {
    id: 'user8',
    name: 'Alexander Anderson',
    role: 'Content Writer',
    lastMsgTime: 'online',
    unreadMsgs: 1,
    imgUrl: user2,
    chatHistory: [
      { message: 'Data report is ready for review.', fromMe: true },
      { message: 'Working on the new blog post.', fromMe: false },
      { message: 'Reviewing the new graphic design.', fromMe: true }
    ]
  },
  {
    id: 'user9',
    name: 'Ava Thomas',
    role: 'Graphic Designer',
    lastMsgTime: '2:10PM',
    unreadMsgs: 0,
    imgUrl: user3,
    chatHistory: [
      { message: 'Deploying the latest build to production.', fromMe: false },
      { message: 'Dealing with customer inquiries.', fromMe: true }
    ]
  },
  {
    id: 'user10',
    name: 'Noah Hall',
    role: 'DevOps Engineer',
    lastMsgTime: '4:15AM',
    unreadMsgs: 2,
    imgUrl: user4,
    chatHistory: [
      { message: 'Server maintenance is scheduled.', fromMe: false },
      { message: 'I have some new data to share.', fromMe: true }
    ]
  },
  {
    id: 'user11',
    name: 'Mia Lewis',
    role: 'Customer Support',
    lastMsgTime: '3:20PM',
    unreadMsgs: 1,
    imgUrl: user5,
    chatHistory: [
      { message: "What's the agenda for the meeting?", fromMe: false },
      {
        message: "Let's discuss the budget for the next quarter.",
        fromMe: true
      },
      { message: "I'll send you the updated report shortly.", fromMe: false }
    ]
  },
  {
    id: 'user12',
    name: 'Liam Martinez',
    role: 'System Administrator',
    lastMsgTime: '12:30PM',
    unreadMsgs: 0,
    imgUrl: user6,
    chatHistory: [
      { message: 'Do you need help with the presentation?', fromMe: true }
    ]
  }
]

export { account, users, dummy }
