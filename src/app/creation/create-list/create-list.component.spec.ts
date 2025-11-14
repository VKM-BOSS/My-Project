import { TestBed } from "@angular/core/testing";
import { CreateList } from "./create-list.component";
import { listType } from "./create-list.component";
describe('CreateList', () => {
    beforeEach(() => TestBed.configureTestingModule({
        declarations: [CreateList]
    }))

    it('CreateList app created', () => {
        const fixture = TestBed.createComponent(CreateList);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy()
    })

    it('list type remain', () => {
        const fixture = TestBed.createComponent(CreateList);
        const app = fixture.componentInstance;
        expect(app.list).toContain({ id: 1, type: "Video", class: "6", medium: "English", subject: "English", chapter: "1", topic: "Nouns", subtopic: "Common Nouns" })
    })
})