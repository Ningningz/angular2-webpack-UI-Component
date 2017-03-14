import { Component, OnInit } from '@angular/core';

import { Ning } from '../shared/ning.model';
import { NingService } from '../shared/ning.service';

@Component({
	selector:'ning-1',
	templateUrl:'ning-1.component.html',
	styleUrls:['./ning-1.component.css'],
	providers:[NingService]
})

export class Ning1Component implements OnInit {
	public ning: Ning[] = [];

	constructor(private ningService: NingService) { }

	public ngOnInit() {

	}

	public nodes = [
		{
			'id': 1,
			'name': 'root1',
			'checked': true,
			'children': [
				{ 'id': 2, 'name': 'child1', 'checked': true, },
				{ 'id': 3, 'name': 'child2', 'checked': true, }
			]
		},
		{
			'id': 4,
			'name': 'root2',
			'children': [
				{ 'id': 5, 'name': 'child2.1' },
				{
					'id': 6,
					'name': 'child2.2',
					'children': [
						{ 'id': 7, 'name': 'subsub' }
					]
				}
			]
		}
	];

	public selectNode(event) {
		console.log(event)
	}
	public check(node, $event) {
		console.log(event)
		console.log(node);
		this.updateChildNodesCheckBox(node, $event.target.checked);
		this.updateParentNodesCheckBox(node.parent);
	}
	public updateChildNodesCheckBox(node, checked) {
		node.data.checked = checked;
		if (node.children) {
			node.children.forEach((child) => this.updateChildNodesCheckBox(child, checked));
		}
	}
	public updateParentNodesCheckBox(node) {
		if (node && node.level > 0 && node.children) {
			let allChildChecked = true;
			let noChildChecked = true;

			for (let child of node.children) {
				if (!child.data.checked) {
					allChildChecked = false;
				} else if (child.data.checked) {
					noChildChecked = false;
				}
			}

			if (allChildChecked) {
				node.data.checked = true;
				node.data.indeterminate = false;
			} else if (noChildChecked) {
				node.data.checked = false;
				node.data.indeterminate = false;
			} else {
				node.data.checked = true;
				node.data.indeterminate = true;
			}
			this.updateParentNodesCheckBox(node.parent);
		}
	}

}
