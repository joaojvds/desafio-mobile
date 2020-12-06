const todoSchema = {
	name: 'todo',
	primaryKey: 'id',
	properties: {
		id: { type: 'int', indexed: true },
		userId: 'int',
		title: 'string',
		completed: 'bool',
	},
};

export default todoSchema;
