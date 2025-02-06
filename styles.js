//style element
const style = document.createElement('style');
// CSS code as string
style.innerHTML = `
 /* Basics */
 :root{
    --primary-color: #343541;
    --secondary-color: #444654;
    --text-color: #fff;
    --bot-color: #839683;
}

#light{
    --primary-color: #ffffff;
    --secondary-color: #e2e2e2;
    --text-color: #000;
}

*{
    font-family: sans-serif;
    color: var(--text-color);
}

body {
    background-color: var(--primary-color);
}

h1 {
    text-align: center;
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

.hero-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
}

.hero-pic {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 10px;
}

.verified-badge {
    width: 30px;
    height: 30px;
    margin-left: 8px;
    cursor: pointer;
    transition: transform 0.3s ease;
    vertical-align: middle; /* Align badge vertically with text */
    transform: translateY(1px); /* Move badge slightly down */
}

/* Verified badge bounce animation */
.verified-badge:active {
    animation: bounce 0.5s ease;
}

@keyframes bounce {
    0%, 100% {
        transform: scale(1) translateY(2px); /* Maintain position after bounce */
    }
    50% {
        transform: scale(1.2) translateY(2px); /* Bounce effect */
    }
}

/* Send button hover and click effects */
#submit {
    font-size: 1rem;
    background-color: transparent;
    padding: 8px 12px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;
}
#submit i {
    color: rgb(255, 255, 255); /* Change this to the desired icon color */
}

#submit:hover i {
    color: rgb(255, 255, 255); /* Change icon color on hover */
}

#submit:hover {
    background-color: #878787;
    border: 2px solid rgb(103, 103, 103);
}

#submit:active {
    transform: scale(0.9);
}

/* Container and form styles */
/* Container and form styles */
.main-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
}

.qus-ans {
    padding-bottom: 200px;
    overflow: auto;
    width: 100%;
}

/* Message Tile Styles */
.question, .answer {
    min-height: 50px;
    max-width: 60vw; /* Decreased maximum length */
    width: fit-content; /* Auto-resize based on content */
    position: relative;
    padding: 20px;
    margin: 50px auto;
    display: flex;
    align-items: center; /* Centering content vertically */
    border-radius: 20px;
    transition: transform 0.2s, box-shadow 0.2s; /* Smooth transition for hover effect */
    word-wrap: break-word; /* Allow long words to break onto the next line */
}

/* Bot's answer aligned to the left */
.answer {
    background: linear-gradient(135deg, #3a3a3a, #474747); /* Unique gradient for bot messages */
    border-radius: 20px 20px 20px 0px; 
    justify-content: flex-start; 
    margin-right: auto; 
    margin-left: 10px; /* Shift bot message slightly left */
    animation: fadeInLeft 0.5s; /* Animation on load */
}

/* User's question aligned to the right */
.question {
    background: linear-gradient(135deg, #007bff, #0056b3); /* Unique gradient for user messages */
    color: #fff; 
    border-radius: 20px 20px 0px 20px; 
    justify-content: flex-end; 
    margin-left: auto; 
    margin-right: 10px; /* Shift user message slightly right */
    animation: fadeInRight 0.5s; /* Animation on load */
    display: block; /* Change display to block for stacking */
}

/* Profile images adjustments */
.logo {
    height: 40px;
    width: 40px;
    margin-right: 10px; 
    border-radius: 50%; 
    position: relative; 
    flex-shrink: 0; 
}

/* Image styles */
img {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    object-fit: cover;
}

/* Hover Effects */
.question:hover, .answer:hover {
    transform: translateY(-3px); /* Lift effect on hover */
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3); /* Shadow effect on hover */
}

/* Keyframe Animations */
@keyframes fadeInLeft {
    from {
        opacity: 0;
        transform: translateX(-10px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes fadeInRight {
    from {
        opacity: 0;
        transform: translateX(10px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}


/* Input box adjustments */
.ask-form {
    position: fixed;
    bottom: 50px;
    width: 50vw;
    height: 50px; /* Increased height for better usability */
    z-index: 99;
    background-color: var(--secondary-color);
    border-radius: 25px; /* Slightly rounded corners */
    padding: 10px; /* Uniform padding */
    display: flex; /* Use Flexbox */
    align-items: center;
    justify-content: space-between; /* Space between input and button */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Add depth with shadow */
}

#ask-here {
    background-color: var(--secondary-color); /* Light background for input */
    border: none;
    height: 100%; /* Full height for the input */
    width: 100%;
    font-size: 1rem;
    border-radius: 20px; /* Keep rounded corners */
    padding: 0 15px; /* Increased padding inside input */
    flex-grow: 1; /* Input takes up the remaining space */
    transition: box-shadow 0.2s;
    /* Added placeholder styling */
}

#ask-here::placeholder {
    color: rgba(255, 255, 255, 0.7); /* Placeholder text color */
}

#ask-here:focus {
    outline: none; /* Remove default outline */
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5); /* Add a glow effect on focus */
    transition: box-shadow 0.3s; /* Smooth transition for focus state */
}

#submit {
    font-size: 1rem;
    background-color: var(--primary-color); /* Make the button stand out */
    color: #fff; /* White text */
    padding: 10px 15px; /* Increased padding for better click area */
    border-radius: 20px; /* Consistent rounded corners */
    border: none;
    cursor: pointer;
    margin-left: 10px; /* Space between input and button */
    transition: background-color 0.3s, transform 0.2s;
}

#submit:hover {
    background-color: var(--primary-color-dark); /* Darker shade on hover */
    transform: scale(1.05); /* Slightly scale on hover */
}

#submit:active {
    transform: scale(0.95); /* Slightly scale down on click */
}

/* Responsive adjustments */
@media (max-width: 600px) {
    .ask-form {
        width: 90vw; /* Wider on smaller screens */
    }

    #submit {
        padding: 8px 12px; /* Smaller padding on buttons */
    }
}


.typing-indicator {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: rgb(255, 255, 255);
    animation: typing 1s infinite;
}

.typing-indicator:nth-child(2) {
    animation-delay: 0.3s;
}

.typing-indicator:nth-child(3) {
    animation-delay: 0.6s;
}
/* Style for the commands list container */
.commands-list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    padding: 10px;
    justify-content: center;
    margin-top: 10px;
}

/* Style for each command tile (button-like) */
.command-tile {
    background-color: white;
    height: max-content;
    width:max-content;
    color: black;
    border: 1px solid black;
    border-radius: 10px;
    padding: 10px 20px;
    cursor: pointer;
    text-align: center;
    font-size: 16px;
    transition: background-color 0.3s ease, color 0.3s ease;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: space-between;
}

/* Style for the command text */
.command-text {
    flex: 1;  /* Allow text to take up available space */
    color: black;  /* Ensure text color is black */
    overflow: hidden;  /* Hide overflowing text */
    text-overflow: ellipsis;  /* Show ellipsis for overflowing text */
    white-space: nowrap;  /* Prevent text from wrapping */
}

/* Style for the arrow symbol */
.arrow-symbol {
    margin-left: 10px;
    font-size: 18px;  /* Adjust size as needed */
    color: black;  /* Ensure arrow color is black */
}

/* Hover effect for command tiles */
.command-tile:hover {
    background-color: black;
    color: white;
}

/* Ensure text color remains white on hover */
.command-tile:hover .command-text {
    color: white;
}

/* Ensure arrow color is white on hover */
.command-tile:hover .arrow-symbol {
    color: white;
}


@keyframes typing {
    0% { transform: translateY(0); }
    50% { transform: translateY(-8px); }
    100% { transform: translateY(0); }
}


@media only screen and (max-width: 600px) {
    /*.question, .answer {
        width: 80vw;
    }*/

    .ask-form {
        width: 80vw;
    }
}

`;
// Append the style element to the head
document.head.appendChild(style);