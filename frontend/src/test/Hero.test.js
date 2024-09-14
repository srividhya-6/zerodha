import React from 'react';
import {render,screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Hero from "../landing_page/home/hero";

//Test Suite

describe('Hero Component',()=>{
    test("render hero image",()=>{
        render(<Hero/>);
        const heroimage=screen.getByAltText("Hero Image");
        expect(heroimage).toBeInTheDocument();
        expect(heroimage).toHaveAttribute("src",'media/images/homeHero.png');
    })
})