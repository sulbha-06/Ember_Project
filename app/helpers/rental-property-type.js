import { helper } from '@ember/component/helper';

const communityPropertyTypes = [
  'condo',
  'TownHouse',
  'Apartment'
];

export function rentalPropertyType([propertyType]) {
  if(communityPropertyTypes.includes(propertyType)){
    return 'Community';
  }
  return 'Standalone';
}

export default helper(rentalPropertyType);
