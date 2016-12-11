import { Alarm } from '../app/models/alarm';

export var ALARMS: Alarm[] = [
	{ 'id': 1, 'type': 'error', 'title': 'System Outage', 'message': 'System Outage at 4:00PM' },
	{ 'id': 2, 'type': 'warning', 'title': 'System Notice', 'message': 'Internet speed slow' },
	{ 'id': 3, 'type': 'success', 'title': 'Company Memo', 'message': 'Corned Beef Lunch' },
	{ 'id': 4, 'type': 'error', 'title': 'System Outage', 'message': 'System Maintenence at 1:00PM' },
	{ 'id': 5, 'type': 'error', 'title': 'System Outage', 'message': 'System Down' },
	{ 'id': 6, 'type': 'warning', 'title': 'System Notice', 'message': 'Network Latency in Denver' },
	{ 'id': 7, 'type': 'info', 'title': 'System Notice', 'message': 'System Restored' },
	{ 'id': 8, 'type': 'wait', 'title': 'System Notice', 'message': 'System Active' },
	{ 'id': 9, 'type': 'error', 'title': 'System Outage', 'message': 'CRM System Outage' },
	{ 'id': 10, 'type': 'error', 'title': 'System Outage', 'message': 'ERP System Outage' }
];
