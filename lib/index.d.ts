// Generated by dts-bundle-generator v5.5.0

export declare type SupportedLanguages = "en_US" | "en" | "de_DE" | "de" | "es_ES" | "es" | "fr_FR" | "fr";
export declare type LocaleConfig = {
	locale?: SupportedLanguages;
	phrases: Record<string, unknown>;
	mobilePhrases?: Record<string, unknown>;
};
declare const STEP_WELCOME = "welcome";
declare const STEP_DOCUMENT = "document";
declare const STEP_POA = "poa";
declare const STEP_FACE = "face";
declare const STEP_COMPLETE = "complete";
export declare type StepTypes = typeof STEP_WELCOME | typeof STEP_DOCUMENT | typeof STEP_POA | typeof STEP_FACE | typeof STEP_COMPLETE;
export declare type DocumentTypes = "passport" | "driving_licence" | "national_identity_card" | "residence_permit";
export declare type PoaTypes = "bank_building_society_statement" | "utility_bill" | "council_tax" | "benefit_letters" | "government_letter";
export declare type RequestedVariant = "standard" | "video";
export declare type DocumentTypeConfig = boolean | {
	country: string;
};
export declare type CaptureOptions = {
	requestedVariant?: RequestedVariant;
	uploadFallback?: boolean;
	useUploader?: boolean;
	useWebcam?: boolean;
};
export declare type StepOptionWelcome = {
	title?: string;
	descriptions?: string[];
	nextButton?: string;
};
export declare type StepOptionDocument = {
	documentTypes?: Partial<Record<DocumentTypes, DocumentTypeConfig>>;
	forceCrossDevice?: boolean;
	showCountrySelection?: boolean;
	useLiveDocumentCapture?: boolean;
} & CaptureOptions;
export declare type StepOptionPoA = {
	country?: string;
	documentTypes?: Partial<Record<PoaTypes, boolean>>;
};
export declare type StepOptionFace = {
	useMultipleSelfieCapture?: boolean;
} & CaptureOptions;
export declare type StepOptionComplete = {
	message?: string;
	submessage?: string;
};
export declare type StepConfigWelcome = {
	type: typeof STEP_WELCOME;
	options?: StepOptionWelcome;
};
export declare type StepConfigDocument = {
	type: typeof STEP_DOCUMENT;
	options?: StepOptionDocument;
};
export declare type StepConfigPoA = {
	type: typeof STEP_POA;
	options?: StepOptionPoA;
};
export declare type StepConfigFace = {
	type: typeof STEP_FACE;
	options?: StepOptionFace;
};
export declare type StepConfigComplete = {
	type: typeof STEP_COMPLETE;
	options?: StepOptionComplete;
};
export declare type StepConfig = StepConfigWelcome | StepConfigDocument | StepConfigPoA | StepConfigFace | StepConfigComplete;
export declare type EnterpriseCobranding = {
	text: string;
};
export declare type EnterpriseFeatures = {
	hideOnfidoLogo?: boolean;
	cobrand?: EnterpriseCobranding;
};
export declare type DocumentResponse = {
	id: string;
	side: string;
	type: string;
};
export declare type FaceResponse = {
	id: string;
	variant: string;
};
export declare type SdkResponse = {
	document_front: DocumentResponse;
	document_back?: DocumentResponse;
	face: FaceResponse;
};
export declare type SdkError = {
	type: "exception" | "expired_token";
	message: string;
};
export declare type ServerRegions = "US" | "EU" | "CA";
export interface FunctionalConfigurations {
	disableAnalytics?: boolean;
	mobileFlow?: boolean;
	roomId?: string;
	tearDown?: boolean;
	useMemoryHistory?: boolean;
}
export interface SdkOptions extends FunctionalConfigurations {
	onComplete?: (data: SdkResponse) => void;
	onError?: (error: SdkError) => void;
	onModalRequestClose?: () => void;
	token?: string;
	useModal?: boolean;
	isModalOpen?: boolean;
	shouldCloseOnOverlayClick?: boolean;
	containerId?: string;
	containerEl?: HTMLElement | null;
	language?: SupportedLanguages | LocaleConfig;
	region?: ServerRegions;
	smsNumberCountryCode?: string;
	userDetails?: {
		smsNumber?: string;
	};
	steps?: Array<StepTypes | StepConfig>;
	enterpriseFeatures?: EnterpriseFeatures;
}
export declare type SdkHandle = {
	options: SdkOptions;
	setOptions(options: SdkOptions): void;
	tearDown(): void;
};
export declare type SdkInitMethod = (options: SdkOptions) => SdkHandle;
export declare const init: SdkInitMethod;

export {};
