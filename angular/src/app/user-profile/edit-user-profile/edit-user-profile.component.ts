import { Component, Inject } from '@angular/core';
import { FormBuilder, Form, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EditUserProfileService } from './edit-user-profile.service';

const log = console.log;

@Component({
    selector: 'app-edit-user-profile',
    templateUrl: './edit-user-profile.component.html',
    styleUrls: ['./edit-user-profile.component.css']
})
export class EditUserProfileComponent {

    editUserForm: FormGroup;
    addedTags: string[] = [];
    removedTags: string[] = [];
    username : string;
    originalTags: string[] = [];

    constructor(
        private fb: FormBuilder,
        private editUserProfileService: EditUserProfileService,
        public dialogRef: MatDialogRef<EditUserProfileComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) {
        this.editUserForm = this.fb.group({
            id: [this.data.id],
            name: [this.data.name],
            email: [this.data.email],
            linked_in: [this.data.linked_in],
            github: [this.data.github],
            bio: [this.data.bio],
            tags: [this.data.tags]
        });
        this.originalTags = this.data.tags; //Used to evaluate addition and removal of tags
        this.username = this.data.username;
    }

    onSubmit() {
        this.editUserProfileService.saveUser(this.editUserForm.value).subscribe(
            result => {
                this.dialogRef.close();
            },
            err => log(err)
        );

        this.editUserProfileService.saveTags(this.username, this.addedTags).subscribe(
            result => {
            },
            err => log(err)
        );

        this.editUserProfileService.removeTags(this.username, this.removedTags).subscribe(
            result => {
            },
            err => log(err)
        );
    }

    tagsChangedHandler(tags) {
        this.addedTags = tags.filter(tag => this.originalTags.indexOf(tag) === -1);
        this.removedTags = this.originalTags.filter(tag => tags.indexOf(tag) === -1);
      }
}
