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
            linkedin: [this.data.linked_in],
            github: [this.data.github],
            bio: [this.data.bio]
        });
    }

    onSubmit() {
        log(this.editUserForm.value);
        this.editUserProfileService.saveUser(this.editUserForm.value).subscribe(
            result => {
                log(result);
                this.dialogRef.close();
            },
            err => log(err)
        );
    }
}
