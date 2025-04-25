import React, { PureComponent } from 'react'
import { CommentSection } from 'react-comments-section'
import 'react-comments-section/dist/index.css'

class Comments extends PureComponent {
  state = {
    data: [
      {
        userId: '01a',
        comId: '012',
        fullName: 'Jane Doe',
        avatarUrl: 'https://ui-avatars.com/api/name=JD&background=random',
        text: 'Nice Video',
        timestamp: `${new Date()}`,
        replies: [
          {
            userId: '01a',
            comId: '014',
           
            fullName: 'John Smith',
            avatarUrl: 'https://ui-avatars.com/api/name=JS&background=random',
            text: 'thanks!',
            timestamp: `${new Date()}`
          }
        ]
      }
      
    ]
  }
  //onSubmitAction = (data: any) => {
  //  console.log('this comment was posted!,data', data)
  //}

  onSubmitAction = async (data: any) => {
    const apiUrl = "https://440bmwum81.execute-api.us-east-1.amazonaws.com/PROD/comments";
  
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          videoId: "video888", // Replace with actual video ID
          username: data.fullName,
          message: data.text,
        }),
      });
      console.log(data);
      if (!response.ok) {
        throw new Error("Failed to submit comment");
      }
  
      console.log("Comment submitted successfully");
    } catch (err) {
      console.error("Error submitting comment:", err);
    }
  };
  



  render() {
    return (
      <div style={{ width: '100%' }}>
      <CommentSection
          currentUser={{
            currentUserId: '01a',
            currentUserImg: 'https://ui-avatars.com/api/name=ANON&background=random',
            currentUserFullName: 'Anonymnous',
            currentUserProfile: ''
          }}
          placeHolder='Write your comment...'
          commentData={this.state.data}
          onSubmitAction={(data: any) => this.onSubmitAction(data)}
          logIn={{
            onLogin: () => alert('Call login function '),
            signUpLink: 'http://localhost:3001/'
          }}
        />
      </div>
    )
  }
}

export default Comments