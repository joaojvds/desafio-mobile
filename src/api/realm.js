import Realm from 'realm';
import axios from './axios';

import todoSchema from '../schemas/todoSchema';

/** Abre uma conexão com o bd */
export default function getRealm() {
	return Realm.open({
		schema: [todoSchema],
	});
}

/**
 * Salva os dados no banco de dados
 * @param {string} schema O nome do tabela na qual sera alterado
 * @param {object} data O dado na qual se deve adicionar no banco de dados
 * @param {string} mode Define se você ira substituir ou não em caso de mesma chave
 */
export async function saveData(schema, data, mode = 'never') {
	try {
		const realm = await getRealm();
		console.log(data);
		realm.write(() => {
			realm.create(schema, data, mode);
		});
	} catch (err) {
		console.log('Erro ao salvar dados no banco de dados, Erro: ' + err);
	}
}

/**
 *  Deleta um item do banco de dados
 *  @param {string} schema O nome do tabela na qual sera alterado
 *  @param {string} id O indentificador do item na qual você quer apagar
 */
export async function deleteData(schema, id) {
	try {
		const realm = await getRealm();
		realm.write(() => {
			realm.delete(realm.objectForPrimaryKey(schema, id));
		});
	} catch (err) {
		console.log('Erro ao deletar dados no banco de dados, Erro: ' + err);
	}
}

/**
 *  Popula o banco de dados com os dados de um fetch
 *  @param {string} schema O nome do tabela na qual sera alterado
 *  @param {string} fetchURL URL para se fazer um fetch
 */
export async function fetchAPI(schema, fetchURL) {
	try {
		const { data } = await axios.get(fetchURL);
		const realm = await getRealm();
		realm.write(() => {
			for (const item of data) {
				realm.create(schema, item, 'modified');
			}
		});
	} catch (err) {
		console.log(
			'Erro ao salvar dados do fetch no banco de dados, Erro: ' + err
		);
	}
}
