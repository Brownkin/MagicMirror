/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */

var config = {
	port: 8080,
	ipWhitelist: [], // Set [] to allow all IP addresses.
//	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses.

	language: "en",
	timeFormat: 12,
	units: "imperial",

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar",
			header: "Calendar",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check-o ",
						url: "webcal://www.calendarlabs.com/templates/ical/US-Holidays.ics"
					},
					{
						symbol: "soccer-ball-o ",
						url: "webcal://ics.ecal.com/ecal-sub/58fa505cb5e9122645428a16/Seattle%20Sounders.ics"
					},
					{
						symbol: "soccer-ball-o ",
						url: "https://calendar.google.com/calendar/ical/v90lr94a08l9ocm19imnu0hs9g%40group.calendar.google.com/public/basic.ics"
					},
					{
						symbol: "calendar-o ",
						url: "https://calendar.google.com/calendar/ical/brownkin%40gmail.com/private-8af2f6823d6bdc58e7448adf4bf1d35a/basic.ics"
					}
				]
			}
		},
		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "",
				locationID: "5809844",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "3e5ea7eb8f210b9f826e8b9742e46cdf",
				showHumidity: "true"
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				location: "New York",
				locationID: "5809844",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "3e5ea7eb8f210b9f826e8b9742e46cdf"
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true
			}
		},
		{
			module: 'MMM-Traffic',
			position: 'bottom_left',
			classes: 'dimmed medium', //optional, default is 'bright medium', only applies to commute info not route_name
			config: {
				api_key: 'AIzaSyCKXhgpvNXk6TBc9e8equ5PC2M4_ho_EE4',
				mode: 'driving',
				origin: '600 7th Ave, Seattle, WA 98104',
				destination: '401 Elliott Ave W, Seattle, WA 98119',
				arrival_time: '0900', //optional, but needs to be in 24 hour time if used.
				route_name: 'Home to Work',
				changeColor: true,
				showGreen: false,
				limitYellow: 10, //Greater than 10% of journey time due to traffic
				limitRed: 30, //Greater than 30% of journey time due to traffic
				traffic_model: 'pessimistic',
				interval: 120000, //2 minutes
				showWeekend: false,
				allTime: true,
				startHr: 7,
				endHr: 12,
				hideOffHours: false
			}
		},
		{
			module: 'MMM-SystemStats',
			position: 'bottom_right', // This can be any of the regions.
			classes: 'small dimmed', // Add your own styling. Optional.
			config: {
				updateInterval: 10000,
				animationSpeed: 0,
				align: 'right', // align labels
				//header: 'System Stats', // This is optional
			}
		},
		{
			module: 'twitControl',
			position: 'middle_center',
			config: {
				maxNumTweets: 3,
				streamType: 'followings',
				api_keys: {
					consumer_key: 'n2ZZSHeLzXWpBsj8tyQlUsb2e',
					consumer_secret: 'Qp9XcJ12zdJmXja6B0lPKOBLZQOon6V2jQgRagjOQ9RTFdMSU3',
					access_token_key: '2825176392-h9TNu5diSVcaUo0TuULbrFkhwi7fOKMNMNn7tSV',
					access_token_secret: 'MlD2vdykoZFrFSgOs9sZgzZt62Aqn4qLLnG70Z94Znhzn'
				}
			}
		},
		{
		    module: 'phone_notification',
            position: 'top_center',
            header: 'Phone Notifications',
            config:{
                accessToken: 'o.OOr4FuIcUxIgONvSXWrewCs2muTvvCcM',
                numberOfNotifications: 5,
                displayNotificationIcon: true,
                displayMessage: true,
                displayCount: false,
                alert: false,
                fade: true,
                maxCharacters: 50
            }
		},
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
