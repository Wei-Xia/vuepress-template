module.exports = {
	base: '/VuePress-template/',
	title: 'Notifications Documentation',
	dest: './docs',
	themeConfig: {
		nav: [
			{ text: "Home", link: "/" },
			{ text: "Single Page", link: "/singlePage/" },
			{ text: "Multiple Pages", link: "/multiplePages/" },
		],
		sidebar: {
			'/multiplePages/': genSidebarConfigDesign('Multiple Pages')
		},
		lastUpdated: 'Last Updated',
		displayAllHeaders: true,
		repo: 'https://github.ibm.com/w3-notifications/notifications-doc-site/',
		repoLabel: 'Contribute!',
		docsRepo: 'https://github.ibm.com/w3-notifications/notifications-doc-site/',
		docsBranch: 'master',
		editLinks: true,
		editLinkText: 'Help us improve this page!'
	},
};

function genSidebarConfigDesign (title) {
	return [
		{
			title,
			collapsable: false,
			children: [
				'',
				'pageOne',
				'pageTwo',
			]
		}
	]
}
