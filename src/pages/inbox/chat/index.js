import Header from "./components/header";
import Reply from "./components/reply";
import Messages from "pages/inbox/chat/components/messages";
import {useState} from "react";

export default function Chat() {

	const user = {
		name: 'Burak Erdaloğlu',
		avatar: 'https://imgs.search.brave.com/Mf1kECO-vGLaY65m6_tRwjjmctPmDIFUQ5ENg1skK8Y/rs:fit:900:900:1/g:ce/aHR0cHM6Ly95dDMu/Z2dwaHQuY29tL3l0/Yy9BTUxuWnVfTVF3/N0RvUXgzdnltRzZ2/aTNaZkFZQnVORC1l/aWJrRGp6M3BKX3pB/PXM5MDAtYy1rLWMw/eDAwZmZmZmZmLW5v/LXJq'
	}

	const [messages, setMessages] = useState([
		{
			from: {
				id: 'g7CEreVco2atoU4IyVGkOfaDVzg1',
				name: 'Burak Erdaloğlu',
				username: 'burakerdaloglu',
				avatar: 'https://imgs.search.brave.com/Mf1kECO-vGLaY65m6_tRwjjmctPmDIFUQ5ENg1skK8Y/rs:fit:900:900:1/g:ce/aHR0cHM6Ly95dDMu/Z2dwaHQuY29tL3l0/Yy9BTUxuWnVfTVF3/N0RvUXgzdnltRzZ2/aTNaZkFZQnVORC1l/aWJrRGp6M3BKX3pB/PXM5MDAtYy1rLWMw/eDAwZmZmZmZmLW5v/LXJq'
			},
			message: 'naber'
		},
		{
			from: {
				id: 'IMQ3jLeeP7UNWI2R6wCY4wCFJLl2',
				name: 'turan',
				username: 'turan',
				avatar: 'https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/3645cf67ecb30736422f2576cc42754d.jpeg?x-expires=1681970400&x-signature=ZS20MElgTsMsgEwtRgj5LYC4L3U%3D'
			},
			message: 'allah var gam yok'
		},
		{
			from: {
				id: 'IMQ3jLeeP7UNWI2R6wCY4wCFJLl2',
				name: 'turan',
				username: 'turan',
				avatar: 'https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/3645cf67ecb30736422f2576cc42754d.jpeg?x-expires=1681970400&x-signature=ZS20MElgTsMsgEwtRgj5LYC4L3U%3D'
			},
			message: 'Fenerbahçe seninle ölmeye geldik'
		},
		{
			from: {
				id: 'IMQ3jLeeP7UNWI2R6wCY4wCFJLl2',
				name: 'turan',
				username: 'turan',
				avatar: 'https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/3645cf67ecb30736422f2576cc42754d.jpeg?x-expires=1681970400&x-signature=ZS20MElgTsMsgEwtRgj5LYC4L3U%3D'
			},
			message: 'ENNNERR VALANCİAAA'
		},
		{
			from: {
				id: 'g7CEreVco2atoU4IyVGkOfaDVzg1',
				name: 'Burak Erdaloğlu',
				username: 'burakerdaloglu',
				avatar: 'https://imgs.search.brave.com/Mf1kECO-vGLaY65m6_tRwjjmctPmDIFUQ5ENg1skK8Y/rs:fit:900:900:1/g:ce/aHR0cHM6Ly95dDMu/Z2dwaHQuY29tL3l0/Yy9BTUxuWnVfTVF3/N0RvUXgzdnltRzZ2/aTNaZkFZQnVORC1l/aWJrRGp6M3BKX3pB/PXM5MDAtYy1rLWMw/eDAwZmZmZmZmLW5v/LXJq'
			},
			message: 'Medeniyet dediğin tek dişi kalmış canaver'
		},
		{
			from: {
				id: 'g7CEreVco2atoU4IyVGkOfaDVzg1',
				name: 'Burak Erdaloğlu',
				username: 'burakerdaloglu',
				avatar: 'https://imgs.search.brave.com/Mf1kECO-vGLaY65m6_tRwjjmctPmDIFUQ5ENg1skK8Y/rs:fit:900:900:1/g:ce/aHR0cHM6Ly95dDMu/Z2dwaHQuY29tL3l0/Yy9BTUxuWnVfTVF3/N0RvUXgzdnltRzZ2/aTNaZkFZQnVORC1l/aWJrRGp6M3BKX3pB/PXM5MDAtYy1rLWMw/eDAwZmZmZmZmLW5v/LXJq'
			},
			message: 'GEL DENEYELİM DİYORSUN OLUR MU YENİDEN'
		},
		{
			from: {
				id: 'IMQ3jLeeP7UNWI2R6wCY4wCFJLl2',
				name: 'turan',
				username: 'turan',
				avatar: 'https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/3645cf67ecb30736422f2576cc42754d.jpeg?x-expires=1681970400&x-signature=ZS20MElgTsMsgEwtRgj5LYC4L3U%3D'
			},
			message: 'RUHUMU OKŞUYOR İNCEDEN İNCEDEN'
		},
		
	])

	return (
		<div className="flex-1">
			<Header user={user} />
			<Messages messages={messages} />
			<Reply setMessages={setMessages} />
		</div>
	)
}
