export interface ProtectionOfficerPreview {
  id: string;
  name: string;
  badgeLevel: string;
  experienceYears: number;
  languages: string[];
  certifications: string[];
  gender: 'female' | 'male' | 'all';
}

export interface SafetyIndicator {
  corridorName: string;
  lightingLevel: 'Optimal' | 'Moderate';
  patrolDensity: 'High' | 'Standard';
  advisoryNote: string;
}
