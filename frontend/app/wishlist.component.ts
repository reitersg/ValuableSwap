/**
 *
 * Created by Yuan on 5/14/16.
 */
import {Component, OnInit} from 'angular2/core';
import {MedialistComponent} from './medialist.component';

@Component({
    selector : 'wishlist',

    template : `
                <div class="well">
                    <h3>{{title}}</h3>
                    <media-list [wantBy]="user"> </media-list>
                </div>

    `,

    directives : [MedialistComponent]
})

export class WishlistComponent{
    user : string;
    title = "My Wishlist";

    ngOnInit(){
        this.user = localStorage.getItem('token');
    }
}