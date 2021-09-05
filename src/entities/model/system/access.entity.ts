import { Column, Entity } from 'typeorm';
import { PublicEntity } from '../public.entity';


@Entity('access')
export class AccessEntity extends PublicEntity {

	@Column('varchar', {
		nullable: true,
		length: 50,
		name: 'module_name',
		comment: '模块名称'
	})
	moduleName: string | null;

	@Column('varchar', {
		nullable: true,
		length: 100,
		name: 'action_name',
		comment: '操作名称'
	})
	actionName: string | null;


	@Column('varchar', {
		nullable: true,
		length: 100,
		name: 'icon',
		comment: '小图标'
	})
	icon: string | null;


	@Column('varchar', {
		nullable: true,
		length: 100,
		name: 'url',
		comment: 'url地址'
	})
	url: string | null;

	@Column('varchar', {
		nullable: true,
		length: 300,
		name: 'viewPath',
		comment: '文件地址'
	})
	viewPath: string | null;


	@Column('int', {
		nullable: false,
		default: () => -1,
		name: 'module_id',
		comment: '父模块id'
	})
	moduleId: number;


	@Column('int', {
		nullable: false,
		default: () => 1,
		name: 'sort',
		comment: '排序'
	})
	sort: number;

	@Column('int', {
		nullable: false,
		default: () => 1,
		name: 'keepAlive',
		comment: '是否缓存页面'
	})
	keepAlive: number;


	@Column('varchar', {
		nullable: true,
		length: 100,
		name: 'description',
		comment: '描素'
	})
	description: string | null;

}
