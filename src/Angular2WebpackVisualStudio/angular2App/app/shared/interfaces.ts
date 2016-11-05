import { ModuleWithProviders } from '@angular/core';

export class Equipment {
    equipmentId: number;
    name: string;
    isActive: boolean;

    equipmenttypeId?: number;
    equipmenttype?: EquipmentType;

    constructor() {
        this.equipmenttype = new EquipmentType();
    }
}

export class EquipmentType {
    equipmenttypeId: number;
    name: string;
    isActive: boolean;
}
