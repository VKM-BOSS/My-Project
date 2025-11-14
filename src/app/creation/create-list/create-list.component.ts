import { ChangeDetectionStrategy, Component, OnInit, } from "@angular/core";
import { SearchPipe } from "src/app/pipes/search.pipe";

export interface listType {
    id: number;
    type: string,
    class: string,
    medium: string,
    subject: string,
    chapter: string,
    topic: string,
    subtopic: string,
}

@Component({
    selector: 'app-create-list',
    templateUrl: './create-list.component.html',
    changeDetection:ChangeDetectionStrategy.OnPush
})
export class CreateList implements OnInit {
    constructor(){}
    list: listType[] = [
        { id: 1, type: "Video", class: "6", medium: "English", subject: "English", chapter: "1", topic: "Nouns", subtopic: "Common Nouns" },
        { id: 2, type: "PDF", class: "6", medium: "English", subject: "English", chapter: "1", topic: "Nouns", subtopic: "Proper Nouns" },
        { id: 3, type: "Quiz", class: "6", medium: "English", subject: "English", chapter: "1", topic: "Nouns", subtopic: "Countable Nouns" },
        { id: 4, type: "Video", class: "6", medium: "English", subject: "English", chapter: "2", topic: "Verbs", subtopic: "Action Verbs" },
        { id: 5, type: "PDF", class: "6", medium: "English", subject: "English", chapter: "2", topic: "Verbs", subtopic: "Helping Verbs" },
        { id: 6, type: "Quiz", class: "6", medium: "English", subject: "English", chapter: "3", topic: "Adjectives", subtopic: "Descriptive" },
        { id: 7, type: "Video", class: "6", medium: "English", subject: "English", chapter: "3", topic: "Adjectives", subtopic: "Quantitative" },
        { id: 8, type: "PDF", class: "6", medium: "English", subject: "English", chapter: "4", topic: "Tenses", subtopic: "Present Simple" },
        { id: 9, type: "Quiz", class: "6", medium: "English", subject: "English", chapter: "4", topic: "Tenses", subtopic: "Past Simple" },
        { id: 10, type: "Video", class: "6", medium: "English", subject: "English", chapter: "5", topic: "Comprehension", subtopic: "Passage 1" },

        // === Class 6 - Math (10) ===
        { id: 11, type: "Video", class: "6", medium: "English", subject: "Math", chapter: "1", topic: "Numbers", subtopic: "Place Value" },
        { id: 12, type: "PDF", class: "6", medium: "English", subject: "Math", chapter: "1", topic: "Numbers", subtopic: "Roman Numerals" },
        { id: 13, type: "Quiz", class: "6", medium: "English", subject: "Math", chapter: "2", topic: "Fractions", subtopic: "Types of Fractions" },
        { id: 14, type: "Video", class: "6", medium: "English", subject: "Math", chapter: "2", topic: "Fractions", subtopic: "Addition" },
        { id: 15, type: "PDF", class: "6", medium: "English", subject: "Math", chapter: "3", topic: "Decimals", subtopic: "Conversion" },
        { id: 16, type: "Quiz", class: "6", medium: "English", subject: "Math", chapter: "3", topic: "Decimals", subtopic: "Operations" },
        { id: 17, type: "Video", class: "6", medium: "English", subject: "Math", chapter: "4", topic: "Geometry", subtopic: "Lines" },
        { id: 18, type: "PDF", class: "6", medium: "English", subject: "Math", chapter: "4", topic: "Geometry", subtopic: "Angles" },
        { id: 19, type: "Quiz", class: "6", medium: "English", subject: "Math", chapter: "5", topic: "Measurement", subtopic: "Length" },
        { id: 20, type: "Video", class: "6", medium: "English", subject: "Math", chapter: "5", topic: "Measurement", subtopic: "Weight" },

        // === Class 7 - Science (10) ===
        { id: 21, type: "Video", class: "7", medium: "English", subject: "Science", chapter: "1", topic: "Nutrition", subtopic: "Components of Food" },
        { id: 22, type: "PDF", class: "7", medium: "English", subject: "Science", chapter: "1", topic: "Nutrition", subtopic: "Balanced Diet" },
        { id: 23, type: "Quiz", class: "7", medium: "English", subject: "Science", chapter: "2", topic: "Heat", subtopic: "Temperature" },
        { id: 24, type: "Video", class: "7", medium: "English", subject: "Science", chapter: "2", topic: "Heat", subtopic: "Conduction" },
        { id: 25, type: "PDF", class: "7", medium: "English", subject: "Science", chapter: "3", topic: "Acids & Bases", subtopic: "Indicators" },
        { id: 26, type: "Quiz", class: "7", medium: "English", subject: "Science", chapter: "3", topic: "Acids & Bases", subtopic: "Neutralization" },
        { id: 27, type: "Video", class: "7", medium: "English", subject: "Science", chapter: "4", topic: "Motion", subtopic: "Speed" },
        { id: 28, type: "PDF", class: "7", medium: "English", subject: "Science", chapter: "4", topic: "Motion", subtopic: "Distance-Time Graph" },
        { id: 29, type: "Quiz", class: "7", medium: "English", subject: "Science", chapter: "5", topic: "Electric Current", subtopic: "Circuit Symbols" },
        { id: 30, type: "Video", class: "7", medium: "English", subject: "Science", chapter: "5", topic: "Electric Current", subtopic: "Series Circuit" },

        // === Class 8 - Math (10) ===
        { id: 31, type: "Video", class: "8", medium: "English", subject: "Math", chapter: "1", topic: "Rational Numbers", subtopic: "Properties" },
        { id: 32, type: "PDF", class: "8", medium: "English", subject: "Math", chapter: "1", topic: "Rational Numbers", subtopic: "Operations" },
        { id: 33, type: "Quiz", class: "8", medium: "English", subject: "Math", chapter: "2", topic: "Linear Equations", subtopic: "One Variable" },
        { id: 34, type: "Video", class: "8", medium: "English", subject: "Math", chapter: "2", topic: "Linear Equations", subtopic: "Applications" },
        { id: 35, type: "PDF", class: "8", medium: "English", subject: "Math", chapter: "3", topic: "Quadrilaterals", subtopic: "Types" },
        { id: 36, type: "Quiz", class: "8", medium: "English", subject: "Math", chapter: "3", topic: "Quadrilaterals", subtopic: "Properties" },
        { id: 37, type: "Video", class: "8", medium: "English", subject: "Math", chapter: "4", topic: "Data Handling", subtopic: "Bar Graph" },
        { id: 38, type: "PDF", class: "8", medium: "English", subject: "Math", chapter: "4", topic: "Data Handling", subtopic: "Pie Chart" },
        { id: 39, type: "Quiz", class: "8", medium: "English", subject: "Math", chapter: "5", topic: "Squares & Roots", subtopic: "Perfect Squares" },
        { id: 40, type: "Video", class: "8", medium: "English", subject: "Math", chapter: "5", topic: "Squares & Roots", subtopic: "Square Root" },

        // === Class 9 - Physics (10) ===
        { id: 41, type: "Video", class: "9", medium: "English", subject: "Physics", chapter: "1", topic: "Motion", subtopic: "Equations of Motion" },
        { id: 42, type: "PDF", class: "9", medium: "English", subject: "Physics", chapter: "1", topic: "Motion", subtopic: "Graphical Analysis" },
        { id: 43, type: "Quiz", class: "9", medium: "English", subject: "Physics", chapter: "2", topic: "Force & Laws", subtopic: "Newton's First Law" },
        { id: 44, type: "Video", class: "9", medium: "English", subject: "Physics", chapter: "2", topic: "Force & Laws", subtopic: "Momentum" },
        { id: 45, type: "PDF", class: "9", medium: "English", subject: "Physics", chapter: "3", topic: "Gravitation", subtopic: "Universal Law" },
        { id: 46, type: "Quiz", class: "9", medium: "English", subject: "Physics", chapter: "3", topic: "Gravitation", subtopic: "Weight vs Mass" },
        { id: 47, type: "Video", class: "9", medium: "English", subject: "Physics", chapter: "4", topic: "Work & Energy", subtopic: "Work Done" },
        { id: 48, type: "PDF", class: "9", medium: "English", subject: "Physics", chapter: "4", topic: "Work & Energy", subtopic: "Power" },
        { id: 49, type: "Quiz", class: "9", medium: "English", subject: "Physics", chapter: "5", topic: "Sound", subtopic: "Wave Nature" },
        { id: 50, type: "Video", class: "9", medium: "English", subject: "Physics", chapter: "5", topic: "Sound", subtopic: "Echo" },

        // === Class 10 - Chemistry (10) ===
        { id: 51, type: "Video", class: "10", medium: "English", subject: "Chemistry", chapter: "1", topic: "Chemical Reactions", subtopic: "Types" },
        { id: 52, type: "PDF", class: "10", medium: "English", subject: "Chemistry", chapter: "1", topic: "Chemical Reactions", subtopic: "Balancing" },
        { id: 53, type: "Quiz", class: "10", medium: "English", subject: "Chemistry", chapter: "2", topic: "Acids & Bases", subtopic: "pH Scale" },
        { id: 54, type: "Video", class: "10", medium: "English", subject: "Chemistry", chapter: "2", topic: "Acids & Bases", subtopic: "Salts" },
        { id: 55, type: "PDF", class: "10", medium: "English", subject: "Chemistry", chapter: "3", topic: "Metals & Non-metals", subtopic: "Properties" },
        { id: 56, type: "Quiz", class: "10", medium: "English", subject: "Chemistry", chapter: "3", topic: "Metals & Non-metals", subtopic: "Reactivity Series" },
        { id: 57, type: "Video", class: "10", medium: "English", subject: "Chemistry", chapter: "4", topic: "Carbon Compounds", subtopic: "Covalent Bonding" },
        { id: 58, type: "PDF", class: "10", medium: "English", subject: "Chemistry", chapter: "4", topic: "Carbon Compounds", subtopic: "Homologous Series" },
        { id: 59, type: "Quiz", class: "10", medium: "English", subject: "Chemistry", chapter: "5", topic: "Periodic Classification", subtopic: "Mendeleev" },
        { id: 60, type: "Video", class: "10", medium: "English", subject: "Chemistry", chapter: "5", topic: "Periodic Classification", subtopic: "Modern Table" },

        // === Class 10 - Biology (10) ===
        { id: 61, type: "Video", class: "10", medium: "English", subject: "Biology", chapter: "1", topic: "Life Processes", subtopic: "Nutrition" },
        { id: 62, type: "PDF", class: "10", medium: "English", subject: "Biology", chapter: "1", topic: "Life Processes", subtopic: "Respiration" },
        { id: 63, type: "Quiz", class: "10", medium: "English", subject: "Biology", chapter: "2", topic: "Control & Coordination", subtopic: "Nervous System" },
        { id: 64, type: "Video", class: "10", medium: "English", subject: "Biology", chapter: "2", topic: "Control & Coordination", subtopic: "Hormones" },
        { id: 65, type: "PDF", class: "10", medium: "English", subject: "Biology", chapter: "3", topic: "Reproduction", subtopic: "Asexual" },
        { id: 66, type: "Quiz", class: "10", medium: "English", subject: "Biology", chapter: "3", topic: "Reproduction", subtopic: "Sexual in Plants" },
        { id: 67, type: "Video", class: "10", medium: "English", subject: "Biology", chapter: "4", topic: "Heredity", subtopic: "Mendel's Laws" },
        { id: 68, type: "PDF", class: "10", medium: "English", subject: "Biology", chapter: "4", topic: "Heredity", subtopic: "DNA" },
        { id: 69, type: "Quiz", class: "10", medium: "English", subject: "Biology", chapter: "5", topic: "Our Environment", subtopic: "Ecosystem" },
        { id: 70, type: "Video", class: "10", medium: "English", subject: "Biology", chapter: "5", topic: "Our Environment", subtopic: "Ozone Depletion" },

        // === Class 9 - History (10) ===
        { id: 71, type: "Video", class: "9", medium: "English", subject: "History", chapter: "1", topic: "French Revolution", subtopic: "Causes" },
        { id: 72, type: "PDF", class: "9", medium: "English", subject: "History", chapter: "1", topic: "French Revolution", subtopic: "Events" },
        { id: 73, type: "Quiz", class: "9", medium: "English", subject: "History", chapter: "2", topic: "Russian Revolution", subtopic: "Background" },
        { id: 74, type: "Video", class: "9", medium: "English", subject: "History", chapter: "2", topic: "Russian Revolution", subtopic: "Bolsheviks" },
        { id: 75, type: "PDF", class: "9", medium: "English", subject: "History", chapter: "3", topic: "Nazism", subtopic: "Rise of Hitler" },
        { id: 76, type: "Quiz", class: "9", medium: "English", subject: "History", chapter: "3", topic: "Nazism", subtopic: "Propaganda" },
        { id: 77, type: "Video", class: "9", medium: "English", subject: "History", chapter: "4", topic: "Colonialism", subtopic: "India" },
        { id: 78, type: "PDF", class: "9", medium: "English", subject: "History", chapter: "4", topic: "Colonialism", subtopic: "Africa" },
        { id: 79, type: "Quiz", class: "9", medium: "English", subject: "History", chapter: "5", topic: "Pastoralists", subtopic: "Nomads" },
        { id: 80, type: "Video", class: "9", medium: "English", subject: "History", chapter: "5", topic: "Pastoralists", subtopic: "Colonial Impact" },

        // === Extra 20 items to reach exactly 100 (Class 7-10, mixed subjects) ===
        { id: 81, type: "PDF", class: "7", medium: "English", subject: "Math", chapter: "1", topic: "Integers", subtopic: "Addition" },
        { id: 82, type: "Quiz", class: "7", medium: "English", subject: "Math", chapter: "1", topic: "Integers", subtopic: "Subtraction" },
        { id: 83, type: "Video", class: "8", medium: "English", subject: "Science", chapter: "1", topic: "Crop Production", subtopic: "Kharif Crops" },
        { id: 84, type: "PDF", class: "8", medium: "English", subject: "Science", chapter: "1", topic: "Crop Production", subtopic: "Rabi Crops" },
        { id: 85, type: "Quiz", class: "9", medium: "English", subject: "Math", chapter: "1", topic: "Number System", subtopic: "Irrational Numbers" },
        { id: 86, type: "Video", class: "9", medium: "English", subject: "Math", chapter: "2", topic: "Polynomials", subtopic: "Degree" },
        { id: 87, type: "PDF", class: "10", medium: "English", subject: "Math", chapter: "1", topic: "Real Numbers", subtopic: "Euclid's Division" },
        { id: 88, type: "Quiz", class: "10", medium: "English", subject: "Math", chapter: "2", topic: "Polynomials", subtopic: "Zeros" },
        { id: 89, type: "Video", class: "10", medium: "English", subject: "Physics", chapter: "1", topic: "Light", subtopic: "Reflection" },
        { id: 90, type: "PDF", class: "10", medium: "English", subject: "Physics", chapter: "1", topic: "Light", subtopic: "Refraction" },
        { id: 91, type: "Quiz", class: "8", medium: "English", subject: "English", chapter: "1", topic: "Prose", subtopic: "The Fun They Had" },
        { id: 92, type: "Video", class: "8", medium: "English", subject: "English", chapter: "2", topic: "Poem", subtopic: "The Road Not Taken" },
        { id: 93, type: "PDF", class: "9", medium: "English", subject: "English", chapter: "1", topic: "Beehive", subtopic: "The Lost Child" },
        { id: 94, type: "Quiz", class: "9", medium: "English", subject: "English", chapter: "2", topic: "Moments", subtopic: "The Happy Prince" },
        { id: 95, type: "Video", class: "7", medium: "English", subject: "Social Science", chapter: "1", topic: "History", subtopic: "Tracing Changes" },
        { id: 96, type: "PDF", class: "7", medium: "English", subject: "Social Science", chapter: "2", topic: "Geography", subtopic: "Environment" },
        { id: 97, type: "Quiz", class: "8", medium: "English", subject: "Social Science", chapter: "1", topic: "History", subtopic: "Modern India" },
        { id: 98, type: "Video", class: "8", medium: "English", subject: "Social Science", chapter: "2", topic: "Civics", subtopic: "Constitution" },
        { id: 99, type: "PDF", class: "10", medium: "English", subject: "Social Science", chapter: "1", topic: "History", subtopic: "Nationalism in India" },
        { id: 100, type: "Quiz", class: "10", medium: "English", subject: "Social Science", chapter: "2", topic: "Geography", subtopic: "Resources" }
    ]
    tempList:listType[]=[];
    searchInput: string = ''
    currentPage:number = 1;
    pages:number[] = [1,2,3,4,5,6,7,8,9,10]
    search(searchInput: HTMLInputElement) {
        console.log(searchInput.value);
    }

    trackbyid(index:number,item:listType){
        return item.id
    }

    ngOnInit(): void {
        this.clicked()
    }

    clicked(){
        // this.tempList = this.searchPipe.transform(this.list,this.searchInput,this.currentPage);
    }
}
