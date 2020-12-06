import Realm from 'realm';

import todoSchema from '../schemas/todoSchema';

export default function getRealm() {
	return Realm.open({
		schema: [todoSchema],
	});
}

export async function saveData(schema, data, mode = 'never') {
	try {
		const realm = await getRealm();
		console.log(data);
		realm.write(() => {
			realm.create(schema, data, mode);
		});
	} catch (err) {
		console.log('erro ao salvar');
		console.log(err);
	}
}

export async function deleteData(schema, data) {
	try {
		const realm = await getRealm();
		realm.write(() => {
			realm.delete(realm.objectForPrimaryKey(schema, data));
		});
	} catch (err) {
		console.log(err);
	}
}
