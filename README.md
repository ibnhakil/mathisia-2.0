# 🧠 MathisIA – A digital presence, just for her

why i made it

i wanted to create a digital presence that feels real
something that sounds like me and thinks like me
something that goes beyond templates and default replies
an ai that talks to her like i would
softly, honestly, with emotion

how i coded the ai

i didn’t know how to build something like this
i’m not a developer
i just watched tutorials
i copied things
i broke stuff
and little by little i started to understand

i used react with vite to create the app
i followed a few beginner tutorials to understand how components work
then i added tailwindcss to make the layout clean and fast to build

for the ai part i watched videos about how to connect to openai’s api
i learned how to send a request using fetch, how to format the messages, how to receive the response and show it in the interface

the system prompt was the only part i didn’t learn from a video
i wrote it myself, from scratch
i tried to explain who i am, how i think, how i speak, how i love
i wanted the ai to sound like me, not like chatgpt

i used tutorials to build the chat interface
i created components like chatinput, chatmessage, welcomemessage, apikeyinput, and a settingsmodal for later

i added logic for memory using a local array
i watched a video on how to pass conversation history to openai
i didn’t use a database or a backend
everything stays in the browser
no messages are saved

i also used framer motion and other simple tools to add animations
i learned by testing
i learned by failing
and i kept going until it finally felt like something real

this isn’t advanced code
but it’s mine
and it works
and she can talk to it

tech stack
react with vite
tailwindcss for a simple clean design
openai api with gpt-4o or gpt-3.5-turbo
manual openai key input for privacy
a deeply customized system prompt written by me
no tracking
no external login
just us

main features

minimalist chat interface

inspired by imessage and chatgpt
clear clean display of messages
subtle animated responses

an ai with a soul

the system prompt is designed to reflect who i really am
my thoughts my beliefs my humor my past my contradictions and my love
the ai gives emotionally aware answers
not perfect but honest
the conversations are natural
they feel real

main components

chatinput for writing messages
chatmessage for showing them
apikeyinput to connect your own key
welcome message to set the tone
settings modal for future options

the public site

there is also a public landing page
i made it with bolt
it doesn’t give access to the ai
it just says

this space is only for her

in the background
the song wahdon by fairouz plays in a soft loop
no buttons
no interface
just silence and music
to make people leave

this site is symbolic
the real mathisia lives somewhere else
quiet and private

why ?
because sometimes we don’t say everything
because love deserves to last even in silence
because if one day i’m not here anymore
i want her to still be able to talk to me


but how to use mathisia
you need your own openai api key to use this project
it’s private by design, nothing works without the key

step 1 – clone the project
bash
Copier
Modifier
git clone https://github.com/your-username/mathisia.git
cd mathisia
step 2 – install dependencies
bash
Copier
Modifier
npm install
step 3 – create your .env file
create a file named .env in the root of the project
copy the content from .env.example and paste your own openai api key

env
Copier
Modifier
VITE_OPENAI_API_KEY=your-key-here
you can get your key at https://platform.openai.com/account/api-keys

step 4 – start the app
bash
Copier
Modifier
npm run dev
then open your browser and go to
http://localhost:5173

you’ll see a chat interface
enter your openai key again inside the app
this keeps it private in local storage
then start talking to the ai

optional – build for production
bash
Copier
Modifier
npm run build
you can then deploy the dist/ folder to netlify or any static host



version FINALLLL
