// Schema com os tipos de dados que ele pode receber
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
