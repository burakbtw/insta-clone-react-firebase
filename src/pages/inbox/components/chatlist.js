import {NavLink, useParams} from "react-router-dom";
import classNames from "classnames";

export default function ChatList() {

	const {conversationId} = useParams()
	const chats = [
		{
			id: 1,
			user: {
				avatar: 'https://imgs.search.brave.com/Mf1kECO-vGLaY65m6_tRwjjmctPmDIFUQ5ENg1skK8Y/rs:fit:900:900:1/g:ce/aHR0cHM6Ly95dDMu/Z2dwaHQuY29tL3l0/Yy9BTUxuWnVfTVF3/N0RvUXgzdnltRzZ2/aTNaZkFZQnVORC1l/aWJrRGp6M3BKX3pB/PXM5MDAtYy1rLWMw/eDAwZmZmZmZmLW5v/LXJq',
				name: 'Burak Erdaloğlu'
			},
			lastMessage: 'Ne anlatıyon be olum be abla'
		},
		{
			id: 2,
			user: {
				avatar: 'https://pbs.twimg.com/profile_images/1427292844612595720/RC1YSvuT_400x400.jpg',
				name: 'Yotuberlar'
			},
			unread: true,
			lastMessage: 'Mustafa: yeni video attım, baktınız mı?'
		},
		{
			id: 3,
			user: {
				avatar: 'https://pbs.twimg.com/media/FtozV8DX0AA6Htx?format=jpg&name=medium',
				name: 'Erdeniz Erdaloğlu'
			},
			lastMessage: 'Ne anlatıyon be abla be abii!'
		}
	]

	return (
		<div className="h-[calc(100%-60px)] overflow-auto py-3">
			<header className="flex items-center justify-between px-5 mb-1">
				<h6 className="text-base font-semibold">Messages</h6>
				<button className="text-brand text-sm font-semibold">28 requests</button>
			</header>
			{chats.map(chat => (
				<NavLink
					className={classNames({
						"h-[72px] flex items-center gap-x-4 hover:bg-zinc-50 px-5": true,
						"font-semibold": chat?.unread,
						"!bg-[#efefef]": +conversationId === chat.id
					})}
					key={chat.id}
					to={`/inbox/${chat.id}`}
				>
					<img src={chat.user.avatar} className="w-14 h-14 rounded-full" alt=""/>
					<div>
						<h6 className="text-sm">{chat.user.name}</h6>
						<p className={`text-sm ${!chat?.unread && 'text-[#8e8e8e]'}`}>
							{chat.lastMessage}
						</p>
					</div>
				</NavLink>
			))}
		</div>
	)
}
